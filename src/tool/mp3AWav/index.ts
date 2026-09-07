import type { ToolDefinition } from '../../types';
import { mp3AWav } from './entry';
export * from './entry';
export const MP3_A_WAV_TOOL: ToolDefinition = { entry: mp3AWav, Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro') };
