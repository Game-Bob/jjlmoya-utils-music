export { musicCategory } from './category';
export { default as musicCategorySEO } from './category/seo.astro';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  MusicToolEntry,
  MusicCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { METRONOME_TOOL } from './tool/metronome';
export { BPM_CALCULATOR_TOOL } from './tool/bpmCalculator';
export { PHASE_DISTANCE_TOOL } from './tool/phaseDistance';
export { FREQUENCY_NOTE_CONVERTER_TOOL } from './tool/frequencyNoteConverter';
export { AUDIO_STORAGE_CALCULATOR_TOOL } from './tool/audioStorageCalculator';
export { MUSIC_NOTE_EQUIVALENCY_TOOL } from './tool/musicNoteEquivalency';

