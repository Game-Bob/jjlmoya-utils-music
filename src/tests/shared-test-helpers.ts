import type { ToolDefinition } from '../types';

export interface ToolExportValidationResult {
  passed: boolean;
  failures: string[];
}

export async function validateToolExports(tools: ToolDefinition[]): Promise<ToolExportValidationResult> {
  const failures: string[] = [];

  for (const tool of tools) {
    if (typeof tool.Component !== 'function') {
      failures.push(`${tool.entry.id}: Component is not a function (${typeof tool.Component})`);
    }

    if (typeof tool.SEOComponent !== 'function') {
      failures.push(`${tool.entry.id}: SEOComponent is not a function (${typeof tool.SEOComponent})`);
    }

    if (typeof tool.BibliographyComponent !== 'function') {
      failures.push(`${tool.entry.id}: BibliographyComponent is not a function (${typeof tool.BibliographyComponent})`);
    }

    try {
      const componentFn = tool.Component as () => Promise<unknown>;
      const seoFn = tool.SEOComponent as () => Promise<unknown>;
      const bibFn = tool.BibliographyComponent as () => Promise<unknown>;

      const componentResult = await componentFn();
      const seoResult = await seoFn();
      const bibResult = await bibFn();

      if (!componentResult || typeof componentResult !== 'object') {
        failures.push(`${tool.entry.id}: Component import returned invalid result`);
      }
      if (!seoResult || typeof seoResult !== 'object') {
        failures.push(`${tool.entry.id}: SEOComponent import returned invalid result`);
      }
      if (!bibResult || typeof bibResult !== 'object') {
        failures.push(`${tool.entry.id}: BibliographyComponent import returned invalid result`);
      }
    } catch (error) {
      failures.push(`${tool.entry.id}: Import execution error - ${error instanceof Error ? error.message : 'unknown'}`);
    }
  }

  return {
    passed: failures.length === 0,
    failures,
  };
}
