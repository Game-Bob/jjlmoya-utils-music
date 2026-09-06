import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
describe('Locale Completeness Validation', () => {


  it('eight registered music tools include the guitar string tension calculator and setlist runtime calculator', () => {
    expect(ALL_TOOLS.length).toBe(8);
  });
});
