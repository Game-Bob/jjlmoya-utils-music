export * from './entry';
export const MUSIC_NOTE_EQUIVALENCY_TOOL: ToolDefinition = {
  entry: musicNoteEquivalency,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
