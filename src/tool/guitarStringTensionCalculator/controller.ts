import {
  GAUGE_PRESETS,
  MATERIALS,
  SCALE_PRESETS,
  TUNING_PRESETS,
  calculateSetTension,
  createStrings,
  type CalculatorInput,
  type MeasurementSystem,
} from './logic';
import { loadMeasurementSystem, saveMeasurementSystem } from './storage';
import { renderForm, renderResult } from './dom-views';
import type { GuitarStringTensionUI } from './ui';

interface MountOptions {
  root: HTMLElement;
  ui: GuitarStringTensionUI;
}

interface FormState extends CalculatorInput {
  system: MeasurementSystem;
  scaleId: string;
  tuningId: string;
  materialId: string;
  presetId: string;
}

interface EventContext {
  root: HTMLElement;
  ui: GuitarStringTensionUI;
  getSystem: () => MeasurementSystem;
  setSystem: (system: MeasurementSystem) => void;
}

export function mountGuitarStringTension({ root, ui }: MountOptions): void {
  let system = loadMeasurementSystem();
  renderForm(root, ui, system);
  const context: EventContext = { root, ui, getSystem: () => system, setSystem: (next) => { system = next; } };
  bindEvents(context);
  setFormState(root, defaultState(system), system);
  update(root, ui, system);
}

function bindEvents({ root, ui, getSystem, setSystem }: EventContext): void {
  root.addEventListener('click', (event) => handleClick(event, { root, ui, getSystem, setSystem }));
  root.addEventListener('input', (event) => {
    if ((event.target as HTMLElement).matches('[data-gst-gauge]')) markCustomPreset(root);
    update(root, ui, getSystem());
  });
  root.addEventListener('change', () => update(root, ui, getSystem()));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeSelects(root);
  });
}

function handleClick(event: Event, { root, ui, getSystem, setSystem }: EventContext): void {
  const target = event.target as HTMLElement;
  const unit = target.closest<HTMLButtonElement>('[data-gst-unit]');
  const preset = target.closest<HTMLButtonElement>('[data-gst-preset]');
  const option = target.closest<HTMLButtonElement>('[data-gst-option]');
  const trigger = target.closest<HTMLButtonElement>('[data-gst-select-trigger]');
  if (unit) return changeUnit({ root, ui, next: unit.dataset.gstUnit as MeasurementSystem, current: getSystem(), setSystem });
  if (preset) applyPreset(root, preset.dataset.gstPreset ?? 'regular', getSystem(), ui);
  if (option) return chooseOption(root, option);
  if (trigger) toggleSelect(root, trigger);
}

interface ChangeUnitOptions {
  root: HTMLElement;
  ui: GuitarStringTensionUI;
  next: MeasurementSystem;
  current: MeasurementSystem;
  setSystem: (system: MeasurementSystem) => void;
}

function changeUnit({ root, ui, next, current, setSystem }: ChangeUnitOptions): void {
  if (next === current) return;
  const state = readFormState(root, current);
  setSystem(next);
  saveMeasurementSystem(next);
  renderForm(root, ui, next);
  setFormState(root, state, next);
  update(root, ui, next);
}

function applyPreset(root: HTMLElement, presetId: string, system: MeasurementSystem, ui: GuitarStringTensionUI): void {
  const preset = GAUGE_PRESETS.find((item) => item.id === presetId);
  if (!preset) return;
  preset.gauges.forEach((gauge, index) => setGauge(root, 6 - index, gauge, system));
  root.querySelectorAll('[data-gst-preset]').forEach((button) => button.classList.toggle('gst-preset-active', button.getAttribute('data-gst-preset') === presetId));
  update(root, ui, system);
}

function markCustomPreset(root: HTMLElement): void {
  root.querySelectorAll('[data-gst-preset]').forEach((button) => button.classList.remove('gst-preset-active'));
}

function update(root: HTMLElement, ui: GuitarStringTensionUI | null, system: MeasurementSystem): void {
  const state = readFormState(root, system);
  const result = calculateSetTension(state);
  updateNotes(root, result.strings);
  if (ui) renderResult(root, result, ui, system);
}

function readFormState(root: HTMLElement, system: MeasurementSystem): FormState {
  const scaleId = valueOf(root, '[data-gst-select="gst-scale"]', 'fenderScale');
  const scaleInput = numberOf(root, '[data-gst-scale-input]', system === 'metric' ? 647.7 : 25.5);
  const scaleInches = scaleId === 'customScale' ? toInches(scaleInput, system) : scaleFromId(scaleId);
  const tuningId = valueOf(root, '[data-gst-select="gst-tuning"]', 'standard');
  const tuning = TUNING_PRESETS.find((item) => item.id === tuningId) ?? TUNING_PRESETS[0];
  const material = MATERIALS[0]!;
  const strings = [6, 5, 4, 3, 2, 1].map((id) => ({ id, note: '', frequency: 0, gaugeInches: gaugeFromField(root, id, system) }));
  return { scaleInches, material, strings: createStrings(strings.map((string) => string.gaugeInches), tuning), system, scaleId, tuningId, materialId: 'steel', presetId: 'custom' };
}

function defaultState(system: MeasurementSystem): FormState {
  const preset = GAUGE_PRESETS.find((item) => item.id === 'regular') ?? GAUGE_PRESETS[0];
  return { scaleInches: 25.5, material: MATERIALS[0], strings: createStrings(preset.gauges, TUNING_PRESETS[0]), system, scaleId: 'fenderScale', tuningId: 'standard', materialId: 'steel', presetId: 'regular' };
}

function setFormState(root: HTMLElement, state: FormState, system: MeasurementSystem): void {
  setValue(root, '[data-gst-select="gst-scale"]', state.scaleId);
  setValue(root, '[data-gst-select="gst-tuning"]', state.tuningId);
  const scaleInput = root.querySelector<HTMLInputElement>('[data-gst-scale-input]');
  if (scaleInput) scaleInput.value = displayScale(state.scaleInches, system);
  updateScaleInput(root, system, state.scaleId);
  state.strings.forEach((string) => setGauge(root, string.id, string.gaugeInches, system));
}

function updateNotes(root: HTMLElement, strings: { id: number; note: string }[]): void {
  strings.forEach((string) => {
    const note = root.querySelector<HTMLElement>(`[data-gst-note="${string.id}"]`);
    if (note) note.textContent = string.note;
  });
}

function setGauge(root: HTMLElement, id: number, gaugeInches: number, system: MeasurementSystem): void {
  const input = root.querySelector<HTMLInputElement>(`[data-gst-gauge="${id}"]`);
  if (input) input.value = system === 'metric' ? (gaugeInches * 25.4).toFixed(2) : (gaugeInches * 1000).toFixed(0);
}

function gaugeFromField(root: HTMLElement, id: number, system: MeasurementSystem): number {
  const value = numberOf(root, `[data-gst-gauge="${id}"]`, 0.01);
  return system === 'metric' ? value / 25.4 : value / 1000;
}

function valueOf(root: HTMLElement, selector: string, fallback: string): string {
  return root.querySelector<HTMLInputElement>(selector)?.value || fallback;
}

function numberOf(root: HTMLElement, selector: string, fallback: number): number {
  const value = Number(root.querySelector<HTMLInputElement>(selector)?.value);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function setValue(root: HTMLElement, selector: string, value: string): void {
  const input = root.querySelector<HTMLInputElement>(selector);
  const wrap = input?.closest<HTMLElement>('[data-gst-select-wrap]');
  const option = wrap?.querySelector<HTMLButtonElement>(`[data-gst-option][data-gst-value="${value}"]`);
  if (input && option) chooseOption(root, option);
}

function chooseOption(root: HTMLElement, option: HTMLButtonElement): void {
  const data = optionData(option);
  if (!data) return;
  const input = root.querySelector<HTMLInputElement>(`[data-gst-select="${data.selectId}"]`);
  const wrap = option.closest<HTMLElement>('[data-gst-select-wrap]');
  const trigger = wrap?.querySelector<HTMLButtonElement>('[data-gst-select-trigger]');
  if (input) input.value = data.value;
  setTriggerLabel(trigger, option);
  setActiveOption(wrap, option);
  closeOption(wrap);
  updateScaleInput(root, loadCurrentSystem(root), data.value);
  root.dispatchEvent(new Event('change'));
}

function optionData(option: HTMLButtonElement): { selectId: string; value: string } | null {
  const selectId = option.dataset.gstOption;
  const value = option.dataset.gstValue;
  return selectId && value ? { selectId, value } : null;
}

function setTriggerLabel(trigger: HTMLButtonElement | null | undefined, option: HTMLButtonElement): void {
  if (!trigger) return;
  const label = trigger.firstChild;
  if (label) label.textContent = option.textContent ?? '';
  trigger.setAttribute('aria-expanded', 'false');
}

function setActiveOption(wrap: HTMLElement | null, option: HTMLButtonElement): void {
  wrap?.querySelectorAll('[data-gst-option]').forEach((item) => item.classList.toggle('gst-option-active', item === option));
}

function closeOption(wrap: HTMLElement | null): void {
  const options = wrap?.querySelector<HTMLElement>('[data-gst-options]');
  if (options) options.hidden = true;
  wrap?.classList.remove('gst-select-open');
}

function toggleSelect(root: HTMLElement, trigger: HTMLButtonElement): void {
  const wrap = trigger.closest<HTMLElement>('[data-gst-select-wrap]');
  if (!wrap) return;
  const options = wrap.querySelector<HTMLElement>('[data-gst-options]');
  const isOpen = options ? !options.hidden : false;
  closeSelects(root);
  if (options) options.hidden = isOpen;
  trigger.setAttribute('aria-expanded', String(!isOpen));
  wrap.classList.toggle('gst-select-open', !isOpen);
}

function closeSelects(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-gst-options]').forEach((options) => { options.hidden = true; });
  root.querySelectorAll<HTMLElement>('[data-gst-select-wrap]').forEach((wrap) => wrap.classList.remove('gst-select-open'));
  root.querySelectorAll<HTMLButtonElement>('[data-gst-select-trigger]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
}

function loadCurrentSystem(root: HTMLElement): MeasurementSystem {
  const system = root.querySelector<HTMLButtonElement>('[data-gst-unit].gst-active')?.dataset.gstUnit;
  return system === 'imperial' ? 'imperial' : 'metric';
}

function scaleFromId(id: string): number {
  return SCALE_PRESETS.find((item) => item.id === id)?.inches ?? 25.5;
}

function toInches(value: number, system: MeasurementSystem): number {
  return system === 'metric' ? value / 25.4 : value;
}

function displayScale(value: number, system: MeasurementSystem): string {
  return system === 'metric' ? (value * 25.4).toFixed(1) : value.toFixed(2);
}

function updateScaleInput(root: HTMLElement, system: MeasurementSystem, scaleId: string): void {
  const input = root.querySelector<HTMLInputElement>('[data-gst-scale-input]');
  if (!input) return;
  input.disabled = scaleId !== 'customScale';
  input.min = system === 'metric' ? '400' : '15';
  input.max = system === 'metric' ? '1000' : '40';
  const advanced = root.querySelector<HTMLDetailsElement>('[data-gst-advanced]');
  if (advanced && scaleId === 'customScale') advanced.open = true;
}
