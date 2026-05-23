import type { Dirent } from 'node:fs';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

export function copyFile(source: string, destination: string): void {
  const content = readFileSync(source, 'utf8');
  writeFileSync(destination, content, { encoding: 'utf8' });
}

export function getFiles(source: string, filter: (file: Dirent) => boolean): string[] {
  const result: string[] = [];

  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const filePath = join(source, entry.name);
    if (entry.isDirectory()) {
      result.push(...getFiles(filePath, filter));
    } else if (filter(entry)) {
      result.push(filePath);
    }
  }

  return result;
}

export function copyCssFiles(source: string, destination: string): void {
  const files = getFiles(source, (file) => file.isFile() && file.name.endsWith('.css'));

  for (const filePath of files) {
    const destPath = join(destination, relative(source, filePath));
    mkdirSync(dirname(destPath), { recursive: true });
    copyFile(filePath, destPath);
  }
}
