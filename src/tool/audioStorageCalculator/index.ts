import { audioStorageCalculator } from './entry';
export * from './entry';
export const AUDIO_STORAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: audioStorageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
