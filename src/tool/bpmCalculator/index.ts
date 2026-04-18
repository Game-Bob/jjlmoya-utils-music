import { bpmCalculator } from './entry';
export * from './entry';
export const BPM_CALCULATOR_TOOL: ToolDefinition = {
  entry: bpmCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
