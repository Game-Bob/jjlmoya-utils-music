import type { MusicToolEntry, ToolDefinition } from '../../types';
import FrequencyNoteConverterComponent from './component.astro';
import FrequencyNoteConverterSEO from './seo.astro';
import FrequencyNoteConverterBibliography from './bibliography.astro';
import type { FrequencyNoteConverterUI } from './ui';

export const frequencyNoteConverter: MusicToolEntry<FrequencyNoteConverterUI> = {
  id: 'frequencyNoteConverter',
  icons: {
    bg: 'mdi:piano',
    fg: 'mdi:music-note',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { FrequencyNoteConverterComponent, FrequencyNoteConverterSEO, FrequencyNoteConverterBibliography };

export const FREQUENCY_NOTE_CONVERTER_TOOL: ToolDefinition = {
  entry: frequencyNoteConverter,
  Component: FrequencyNoteConverterComponent,
  SEOComponent: FrequencyNoteConverterSEO,
  BibliographyComponent: FrequencyNoteConverterBibliography,
};
