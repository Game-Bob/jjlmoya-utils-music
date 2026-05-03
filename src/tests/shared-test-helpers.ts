import type { ToolDefinition } from '../types';

export interface ToolExportValidationResult {
  passed: boolean;
  failures: string[];
}

async function validateSingleComponent(id: string, name: string, fn: unknown, failures: string[]): Promise<void> {
  if (typeof fn !== 'function') {
    failures.push(`${id}: ${name} is not a function (${typeof fn})`);
    return;
  }
  try {
    const result = await (fn as () => Promise<unknown>)();
    if (!result || typeof result !== 'object') {
      failures.push(`${id}: ${name} import returned invalid result`);
    }
  } catch (error) {
    failures.push(`${id}: Import execution error - ${error instanceof Error ? error.message : 'unknown'}`);
  }
}

export async function validateToolExports(tools: ToolDefinition[]): Promise<ToolExportValidationResult> {
  const failures: string[] = [];

  for (const tool of tools) {
    await validateSingleComponent(tool.entry.id, 'Component', tool.Component, failures);
    await validateSingleComponent(tool.entry.id, 'SEOComponent', tool.SEOComponent, failures);
    await validateSingleComponent(tool.entry.id, 'BibliographyComponent', tool.BibliographyComponent, failures);
  }

  return {
    passed: failures.length === 0,
    failures,
  };
}
