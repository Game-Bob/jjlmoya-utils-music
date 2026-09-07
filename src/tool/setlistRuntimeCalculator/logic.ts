export type SetlistItemKind = 'song' | 'encore';

export interface SetlistItemInput {
  id: string;
  title: string;
  duration: string;
  pauseMinutes: number;
  kind: SetlistItemKind;
  included?: boolean;
}

export interface RuntimeItem {
  id: string;
  title: string;
  kind: SetlistItemKind;
  durationSeconds: number;
  pauseAfterSeconds: number;
  startOffsetSeconds: number;
  endOffsetSeconds: number;
}

export type RuntimeStatus = 'invalid' | 'within' | 'over';

export interface SetlistRuntimeResult {
  valid: boolean;
  status: RuntimeStatus;
  errorCodes: string[];
  items: RuntimeItem[];
  startTimeMinutes: number | null;
  slotSeconds: number | null;
  totalSeconds: number;
  songSeconds: number;
  pauseSeconds: number;
  marginSeconds: number | null;
  finishTime: string | null;
  timelineSeconds: number;
}

const MAX_DURATION_SECONDS = 24 * 60 * 60;
const MAX_PAUSE_MINUTES = 30;
const MIN_SLOT_MINUTES = 15;
const MAX_SLOT_MINUTES = 12 * 60;

function parseDurationParts(parts: string[]): number | null {
  if (parts.length === 1) return Number(parts[0]);
  if (parts.length === 2) {
    const minutes = Number(parts[0]);
    const seconds = Number(parts[1]);
    return seconds > 59 ? null : minutes * 60 + seconds;
  }

  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  const seconds = Number(parts[2]);
  return minutes > 59 || seconds > 59 ? null : hours * 3600 + minutes * 60 + seconds;
}

export function parseDuration(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const parts = trimmed.split(':');
  if (parts.length > 3 || parts.some((part) => !/^\d+$/.test(part))) return null;

  const seconds = parseDurationParts(parts);
  if (seconds === null) return null;
  if (!Number.isInteger(seconds) || seconds <= 0 || seconds > MAX_DURATION_SECONDS) return null;
  return seconds;
}

export function parseStartTime(value: string): number | null {
  const match = /^(\d{2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

export function formatClockTime(startMinutes: number, offsetSeconds: number): string {
  const totalMinutes = Math.floor((startMinutes * 60 + offsetSeconds) / 60);
  const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutesInDay / 60);
  const minutes = minutesInDay % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function formatDuration(seconds: number): string {
  const safeSeconds = Math.max(0, Math.round(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const remainder = safeSeconds % 60;
  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
  if (remainder > 0 || parts.length === 0) parts.push(`${remainder}s`);
  return parts.join(' ');
}

export function formatSignedDuration(seconds: number): string {
  if (seconds === 0) return '0m';
  return `${seconds > 0 ? '+' : '-'}${formatDuration(Math.abs(seconds))}`;
}

interface ValidInput {
  input: SetlistItemInput;
  durationSeconds: number;
  pauseSeconds: number;
}

function getSlotSeconds(slotMinutes: number): number | null {
  const valid = Number.isFinite(slotMinutes) && slotMinutes >= MIN_SLOT_MINUTES && slotMinutes <= MAX_SLOT_MINUTES;
  return valid ? Math.round(slotMinutes * 60) : null;
}

function hasValidInput(title: string, durationSeconds: number | null, validPause: boolean): durationSeconds is number {
  return Boolean(title) && durationSeconds !== null && validPause;
}

function validateInput(input: SetlistItemInput, errorCodes: string[]): ValidInput | null {
  const title = input.title.trim();
  const durationSeconds = parseDuration(input.duration);
  const pauseMinutes: number = Number(input.pauseMinutes);
  const validPause = Number.isFinite(pauseMinutes) && pauseMinutes >= 0 && pauseMinutes <= MAX_PAUSE_MINUTES;

  if (!title) errorCodes.push(`title:${input.id}`);
  if (durationSeconds === null) errorCodes.push(`duration:${input.id}`);
  if (!validPause) errorCodes.push(`pause:${input.id}`);
  if (!hasValidInput(title, durationSeconds, validPause)) return null;
  const pauseSeconds = Math.round(Number(input.pauseMinutes) * 60);
  return { input, durationSeconds, pauseSeconds };
}

function collectValidInputs(inputs: SetlistItemInput[], errorCodes: string[]): ValidInput[] {
  const candidates = inputs.filter((item) => item.kind === 'song' || item.included === true);
  const validInputs: ValidInput[] = [];
  for (const input of candidates) {
    const validInput = validateInput(input, errorCodes);
    if (validInput) validInputs.push(validInput);
  }
  if (candidates.length === 0) errorCodes.push('items');
  return validInputs;
}

function invalidResult(errorCodes: string[], startTimeMinutes: number | null, slotSeconds: number | null): SetlistRuntimeResult {
  return {
    valid: false,
    status: 'invalid',
    errorCodes,
    items: [],
    startTimeMinutes,
    slotSeconds,
    totalSeconds: 0,
    songSeconds: 0,
    pauseSeconds: 0,
    marginSeconds: slotSeconds,
    finishTime: null,
    timelineSeconds: slotSeconds ?? 0,
  };
}

function buildRuntimeItems(validInputs: ValidInput[]): { items: RuntimeItem[]; totalSeconds: number; songSeconds: number; pauseSeconds: number } {
  const items: RuntimeItem[] = [];
  let cursor = 0;
  let songSeconds = 0;
  let pauseSeconds = 0;
  validInputs.forEach(({ input, durationSeconds, pauseSeconds: inputPauseSeconds }, index) => {
    const pauseAfterSeconds = index < validInputs.length - 1 ? inputPauseSeconds : 0;
    items.push({ id: input.id, title: input.title.trim(), kind: input.kind, durationSeconds, pauseAfterSeconds, startOffsetSeconds: cursor, endOffsetSeconds: cursor + durationSeconds });
    cursor += durationSeconds + pauseAfterSeconds;
    songSeconds += durationSeconds;
    pauseSeconds += pauseAfterSeconds;
  });
  return { items, totalSeconds: cursor, songSeconds, pauseSeconds };
}

function getRuntimeStatus(marginSeconds: number | null): RuntimeStatus {
  if (marginSeconds !== null && marginSeconds < 0) return 'over';
  return 'within';
}

export function calculateSetlistRuntime(
  startTime: string,
  slotMinutes: number,
  inputs: SetlistItemInput[],
): SetlistRuntimeResult {
  const startTimeMinutes = parseStartTime(startTime);
  const slotSeconds = getSlotSeconds(slotMinutes);
  const errorCodes: string[] = [];
  if (startTimeMinutes === null) errorCodes.push('start-time');
  if (slotSeconds === null) errorCodes.push('slot-minutes');
  const validInputs = collectValidInputs(inputs, errorCodes);
  if (errorCodes.length > 0) return invalidResult(errorCodes, startTimeMinutes, slotSeconds);

  const runtime = buildRuntimeItems(validInputs);
  const marginSeconds = slotSeconds === null ? null : slotSeconds - runtime.totalSeconds;
  return {
    valid: true,
    status: getRuntimeStatus(marginSeconds),
    errorCodes: [],
    items: runtime.items,
    startTimeMinutes,
    slotSeconds,
    totalSeconds: runtime.totalSeconds,
    songSeconds: runtime.songSeconds,
    pauseSeconds: runtime.pauseSeconds,
    marginSeconds,
    finishTime: formatClockTime(startTimeMinutes ?? 0, runtime.totalSeconds),
    timelineSeconds: Math.max(runtime.totalSeconds, slotSeconds ?? 0),
  };
}

export function buildScheduleText(result: SetlistRuntimeResult): string {
  if (!result.valid || result.startTimeMinutes === null) return '';
  return result.items
    .map((item, index) => {
      const start = formatClockTime(result.startTimeMinutes ?? 0, item.startOffsetSeconds);
      const end = formatClockTime(result.startTimeMinutes ?? 0, item.endOffsetSeconds);
      const pause = item.pauseAfterSeconds > 0 ? ` · pause ${formatDuration(item.pauseAfterSeconds)}` : '';
      const kind = item.kind === 'encore' ? ' (encore)' : '';
      return `${String(index + 1).padStart(2, '0')} ${start}-${end} ${item.title}${kind}${pause}`;
    })
    .concat(`Finish ${result.finishTime ?? ''} · Total ${formatDuration(result.totalSeconds)}`)
    .join('\n');
}
