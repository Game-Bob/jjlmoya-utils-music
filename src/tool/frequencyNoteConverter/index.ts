import { frequencyNoteConverter } from './entry';
export * from './entry';
export const FREQUENCY_NOTE_CONVERTER_TOOL: ToolDefinition = {
  entry: frequencyNoteConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
