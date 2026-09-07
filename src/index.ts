export { musicCategory } from './category';
export const musicCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

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
export { MP3_A_OGG_TOOL } from './tool/mp3AOgg';
export { WAV_A_OGG_TOOL } from './tool/wavAOgg';
export { OGG_A_MP3_TOOL } from './tool/oggAMp3';
export { OGG_A_WAV_TOOL } from './tool/oggAWav';
export { MP3_A_WAV_TOOL } from './tool/mp3AWav';
export { WAV_A_MP3_TOOL } from './tool/wavAMp3';
