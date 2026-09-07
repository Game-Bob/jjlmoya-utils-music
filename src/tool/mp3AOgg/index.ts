import type { ToolDefinition } from '../../types';
import { mp3AOgg } from './entry';
export * from './entry';
export const MP3_A_OGG_TOOL: ToolDefinition = { entry: mp3AOgg, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
