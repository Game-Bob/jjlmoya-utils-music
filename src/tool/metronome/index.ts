import type { MusicToolEntry, ToolDefinition } from '../../types';
import MetronomeComponent from './component.astro';
import MetronomeSEO from './seo.astro';
import MetronomeBibliography from './bibliography.astro';
import type { MetronomeUI } from './ui';

export const metronome: MusicToolEntry<MetronomeUI> = {
  id: 'metronome',
  icons: {
    bg: 'mdi:metronome',
    fg: 'mdi:play-circle',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { MetronomeComponent, MetronomeSEO, MetronomeBibliography };

export const METRONOME_TOOL: ToolDefinition = {
  entry: metronome,
  Component: MetronomeComponent,
  SEOComponent: MetronomeSEO,
  BibliographyComponent: MetronomeBibliography,
};
