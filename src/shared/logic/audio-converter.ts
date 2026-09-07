export interface AudioItem {
  id: string;
  file: File;
  baseName: string;
  output: Blob | null;
  outputUrl: string;
  outputSize: number;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${parseFloat((bytes / 1024 ** index).toFixed(1))} ${units[index]}`;
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}
