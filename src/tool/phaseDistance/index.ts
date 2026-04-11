import type { MusicToolEntry, ToolDefinition } from '../../types';
import PhaseDistanceComponent from './component.astro';
import PhaseDistanceSEO from './seo.astro';
import PhaseDistanceBibliography from './bibliography.astro';
import type { PhaseDistanceUI } from './ui';

export const phaseDistance: MusicToolEntry<PhaseDistanceUI> = {
  id: 'phaseDistance',
  icons: {
    bg: 'mdi:waveform',
    fg: 'mdi:microphone',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { PhaseDistanceComponent, PhaseDistanceSEO, PhaseDistanceBibliography };

export const PHASE_DISTANCE_TOOL: ToolDefinition = {
  entry: phaseDistance,
  Component: PhaseDistanceComponent,
  SEOComponent: PhaseDistanceSEO,
  BibliographyComponent: PhaseDistanceBibliography,
};
