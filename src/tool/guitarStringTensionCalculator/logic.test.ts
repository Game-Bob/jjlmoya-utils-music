import { describe, expect, it } from 'vitest';
import {
  MATERIALS,
  calculateSetTension,
  calculateStringTension,
  classifyTension,
  createStrings,
  TUNING_PRESETS,
} from './logic';

describe('guitar string tension logic', () => {
  it('calculates a known plain string tension in SI units', () => {
    const reading = calculateStringTension(
      { id: 1, note: 'E4', frequency: 329.628, gaugeInches: 0.010 },
      25.5,
      MATERIALS[0]!.density,
    );
    expect(reading.newtons).toBeCloseTo(72.52, 1);
    expect(reading.kilograms).toBeCloseTo(7.40, 1);
    expect(reading.pounds).toBeCloseTo(16.30, 1);
  });

  it('classifies low, balanced and high readings', () => {
    expect(classifyTension(7.99)).toBe('low');
    expect(classifyTension(16)).toBe('balanced');
    expect(classifyTension(25.01)).toBe('high');
  });

  it('creates a drop D tuning with the lowest string lowered', () => {
    const strings = createStrings([0.042, 0.032, 0.024, 0.016, 0.011, 0.009], TUNING_PRESETS[2]);
    expect(strings[0]!.note).toBe('D2');
    expect(strings[0]!.frequency).toBeCloseTo(73.416, 2);
    expect(strings[1]!.note).toBe('A2');
  });

  it('sums a complete set and exposes its spread', () => {
    const result = calculateSetTension({
      scaleInches: 25.5,
      material: MATERIALS[0]!,
      strings: createStrings([0.042, 0.032, 0.024, 0.016, 0.011, 0.009], TUNING_PRESETS[0]!),
    });
    expect(result.strings).toHaveLength(6);
    expect(result.totalPounds).toBeGreaterThan(60);
    expect(result.spreadPounds).toBeGreaterThan(1);
  });
});
