export type MeasurementSystem = 'metric' | 'imperial';
export type TensionStatus = 'low' | 'balanced' | 'high';

export interface MaterialPreset {
  id: string;
  density: number;
}

export interface GaugePreset {
  id: string;
  gauges: number[];
}

export interface TuningPreset {
  id: string;
  offsets: number[];
}

export interface ScalePreset {
  id: string;
  inches: number;
}

export interface StringInput {
  id: number;
  note: string;
  frequency: number;
  gaugeInches: number;
}

export interface TensionReading extends StringInput {
  linearDensity: number;
  newtons: number;
  kilograms: number;
  pounds: number;
  status: TensionStatus;
}

export interface TensionSet {
  strings: TensionReading[];
  totalNewtons: number;
  totalKilograms: number;
  totalPounds: number;
  averagePounds: number;
  spreadPounds: number;
  status: TensionStatus;
}

export interface CalculatorInput {
  scaleInches: number;
  material: MaterialPreset;
  strings: StringInput[];
}

export const STRING_NOTES = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];
export const STANDARD_FREQUENCIES = [82.4069, 110, 146.832, 195.998, 246.942, 329.628];
export const MATERIALS: MaterialPreset[] = [
  { id: 'steel', density: 7850 },
  { id: 'nickel', density: 8900 },
  { id: 'phosphorBronze', density: 7800 },
  { id: 'nylon', density: 1150 },
];
export const GAUGE_PRESETS: GaugePreset[] = [
  { id: 'extraLight', gauges: [0.042, 0.032, 0.024, 0.016, 0.011, 0.009] },
  { id: 'regular', gauges: [0.046, 0.036, 0.026, 0.017, 0.013, 0.010] },
  { id: 'medium', gauges: [0.049, 0.038, 0.028, 0.018, 0.014, 0.011] },
  { id: 'heavy', gauges: [0.054, 0.042, 0.032, 0.020, 0.016, 0.012] },
];
export const SCALE_PRESETS: ScalePreset[] = [
  { id: 'shortScale', inches: 24.75 },
  { id: 'fenderScale', inches: 25.5 },
  { id: 'martinScale', inches: 25.4 },
];
export const TUNING_PRESETS: TuningPreset[] = [
  { id: 'standard', offsets: [0, 0, 0, 0, 0, 0] },
  { id: 'halfStepDown', offsets: [-1, -1, -1, -1, -1, -1] },
  { id: 'dropD', offsets: [-2, 0, 0, 0, 0, 0] },
  { id: 'wholeStepDown', offsets: [-2, -2, -2, -2, -2, -2] },
  { id: 'openG', offsets: [-2, -2, 0, 0, 0, -2] },
];

export function frequencyWithOffset(frequency: number, semitones: number): number {
  return frequency * 2 ** (semitones / 12);
}

export function calculateStringTension(input: StringInput, scaleInches: number, density: number): TensionReading {
  const diameter = input.gaugeInches * 0.0254;
  const length = scaleInches * 0.0254;
  const linearDensity = density * Math.PI * (diameter / 2) ** 2;
  const newtons = 4 * length ** 2 * input.frequency ** 2 * linearDensity;
  const kilograms = newtons / 9.80665;
  const pounds = newtons / 4.4482216152605;
  return { ...input, linearDensity, newtons, kilograms, pounds, status: classifyTension(pounds) };
}

export function calculateSetTension(input: CalculatorInput): TensionSet {
  const strings = input.strings.map((string) => calculateStringTension(string, input.scaleInches, input.material.density));
  const totalNewtons = strings.reduce((total, string) => total + string.newtons, 0);
  const totalKilograms = strings.reduce((total, string) => total + string.kilograms, 0);
  const totalPounds = strings.reduce((total, string) => total + string.pounds, 0);
  const pounds = strings.map((string) => string.pounds);
  const averagePounds = totalPounds / strings.length;
  const spreadPounds = Math.max(...pounds) - Math.min(...pounds);
  const status = setStatus(strings.map((string) => string.status));
  return { strings, totalNewtons, totalKilograms, totalPounds, averagePounds, spreadPounds, status };
}

function setStatus(statuses: TensionStatus[]): TensionStatus {
  if (statuses.includes('high')) return 'high';
  if (statuses.includes('low')) return 'low';
  return 'balanced';
}

export function classifyTension(pounds: number): TensionStatus {
  if (pounds < 8) return 'low';
  if (pounds > 25) return 'high';
  return 'balanced';
}

export function createStrings(gauges: number[], tuning: TuningPreset): StringInput[] {
  return gauges.map((gaugeInches, index) => ({
    id: 6 - index,
    note: noteWithOffset(STRING_NOTES[index] ?? 'E2', tuning.offsets[index] ?? 0),
    frequency: frequencyWithOffset(STANDARD_FREQUENCIES[index] ?? 0, tuning.offsets[index] ?? 0),
    gaugeInches,
  }));
}

function noteWithOffset(note: string, semitones: number): string {
  const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const match = note.match(/^([A-G]#?)([0-9])$/);
  if (!match) return note;
  const index = names.indexOf(match[1] ?? 'E');
  const midi = (Number(match[2]) + 1) * 12 + index + semitones;
  const octave = Math.floor(midi / 12) - 1;
  return `${names[(midi % 12 + 12) % 12]}${octave}`;
}
