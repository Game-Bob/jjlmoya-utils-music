import type { MusicToolEntry, ToolDefinition } from '../../types';
import MusicNoteEquivalencyComponent from './component.astro';
import MusicNoteEquivalencySEO from './seo.astro';
import MusicNoteEquivalencyBibliography from './bibliography.astro';
import type { MusicNoteEquivalencyUI } from './ui';

export const musicNoteEquivalency: MusicToolEntry<MusicNoteEquivalencyUI> = {
  id: 'musicNoteEquivalency',
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

export { MusicNoteEquivalencyComponent, MusicNoteEquivalencySEO, MusicNoteEquivalencyBibliography };

export const MUSIC_NOTE_EQUIVALENCY_TOOL: ToolDefinition = {
  entry: musicNoteEquivalency,
  Component: MusicNoteEquivalencyComponent,
  SEOComponent: MusicNoteEquivalencySEO,
  BibliographyComponent: MusicNoteEquivalencyBibliography,
};
