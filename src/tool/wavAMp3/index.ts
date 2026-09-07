import type { ToolDefinition } from '../../types';
import { wavAMp3 } from './entry';
export * from './entry';
export const WAV_A_MP3_TOOL: ToolDefinition = { entry: wavAMp3, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
