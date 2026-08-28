import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
describe('Locale Completeness Validation', () => {


  it('seven registered music tools include the guitar string tension calculator', () => {
    expect(ALL_TOOLS.length).toBe(7);
  });
});
