export * from './entry';
export const PHASE_DISTANCE_TOOL: ToolDefinition = {
  entry: phaseDistance,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
