import type { ToolDefinition } from '../../types';
import { guitarStringTensionCalculator } from './entry';

export * from './entry';

export const GUITAR_STRING_TENSION_CALCULATOR_TOOL: ToolDefinition = {
  entry: guitarStringTensionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
