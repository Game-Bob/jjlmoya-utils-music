import type { ToolDefinition } from '../../types';
import { oggAMp3 } from './entry';
export * from './entry';
export const OGG_A_MP3_TOOL: ToolDefinition = { entry: oggAMp3, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
