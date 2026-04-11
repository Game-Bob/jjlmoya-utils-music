import type { MusicToolEntry, ToolDefinition } from '../../types';
import AudioStorageCalculatorComponent from './component.astro';
import AudioStorageCalculatorSEO from './seo.astro';
import AudioStorageCalculatorBibliography from './bibliography.astro';
import type { AudioStorageCalculatorUI } from './ui';

export const audioStorageCalculator: MusicToolEntry<AudioStorageCalculatorUI> = {
  id: 'audioStorageCalculator',
  icons: {
    bg: 'mdi:harddisk',
    fg: 'mdi:waveform',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { AudioStorageCalculatorComponent, AudioStorageCalculatorSEO, AudioStorageCalculatorBibliography };

export const AUDIO_STORAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: audioStorageCalculator,
  Component: AudioStorageCalculatorComponent,
  SEOComponent: AudioStorageCalculatorSEO,
  BibliographyComponent: AudioStorageCalculatorBibliography,
};
