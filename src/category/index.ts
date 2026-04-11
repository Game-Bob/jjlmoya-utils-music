import type { MusicCategoryEntry } from '../types';
import { metronome } from '../tool/metronome';
import { bpmCalculator } from '../tool/bpmCalculator';
import { phaseDistance } from '../tool/phaseDistance';
import { frequencyNoteConverter } from '../tool/frequencyNoteConverter';
import { audioStorageCalculator } from '../tool/audioStorageCalculator';
import { musicNoteEquivalency } from '../tool/musicNoteEquivalency';

export const musicCategory: MusicCategoryEntry = {
  icon: 'mdi:music',
  tools: [metronome, bpmCalculator, phaseDistance, frequencyNoteConverter, audioStorageCalculator, musicNoteEquivalency],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

