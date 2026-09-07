import type { ToolDefinition } from '../../types';
import { wavAOgg } from './entry';
export * from './entry';
export const WAV_A_OGG_TOOL: ToolDefinition = { entry: wavAOgg, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
