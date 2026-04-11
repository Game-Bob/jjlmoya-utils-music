import type { MusicToolEntry, ToolDefinition } from '../../types';
import BpmCalculatorComponent from './component.astro';
import BpmCalculatorSEO from './seo.astro';
import BpmCalculatorBibliography from './bibliography.astro';
import type { BpmCalculatorUI } from './ui';

export const bpmCalculator: MusicToolEntry<BpmCalculatorUI> = {
  id: 'bpmCalculator',
  icons: {
    bg: 'mdi:music-note-sixteenth',
    fg: 'mdi:timer-outline',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BpmCalculatorComponent, BpmCalculatorSEO, BpmCalculatorBibliography };

export const BPM_CALCULATOR_TOOL: ToolDefinition = {
  entry: bpmCalculator,
  Component: BpmCalculatorComponent,
  SEOComponent: BpmCalculatorSEO,
  BibliographyComponent: BpmCalculatorBibliography,
};
