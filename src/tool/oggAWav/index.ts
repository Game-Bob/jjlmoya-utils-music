import type { ToolDefinition } from '../../types';
import { oggAWav } from './entry';
export * from './entry';
export const OGG_A_WAV_TOOL: ToolDefinition = { entry: oggAWav, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
