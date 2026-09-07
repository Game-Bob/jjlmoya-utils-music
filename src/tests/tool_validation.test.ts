import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { musicCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 14 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(14);
    });

    it('musicCategory should be defined', () => {
      expect(musicCategory).toBeDefined();
      expect(musicCategory.i18n).toBeDefined();
    });
  });
});

