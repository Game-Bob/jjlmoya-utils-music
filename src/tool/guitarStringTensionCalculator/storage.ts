import type { MeasurementSystem } from './logic';

const STORAGE_KEY = 'jjlmoya:guitar-string-tension:unit';

export function loadMeasurementSystem(): MeasurementSystem {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'imperial' ? 'imperial' : 'metric';
  } catch {
    return 'metric';
  }
}

export function saveMeasurementSystem(system: MeasurementSystem): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, system);
  } catch {}
}
