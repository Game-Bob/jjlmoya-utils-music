import type { ToolDefinition } from '../../types';
import { setlistRuntimeCalculator } from './entry';

export * from './entry';
export const SETLIST_RUNTIME_CALCULATOR_TOOL: ToolDefinition = {
  entry: setlistRuntimeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
