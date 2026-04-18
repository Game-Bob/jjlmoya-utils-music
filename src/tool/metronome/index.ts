export * from './entry';
export const METRONOME_TOOL: ToolDefinition = {
  entry: metronome,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
