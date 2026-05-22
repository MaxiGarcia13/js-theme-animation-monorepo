import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { eslintConfig } from '@maxigarcia/eslint-config';

const ignores = [
  '**/dist/**',
  '**/.astro/**',
  '**/node_modules/**',
  '**/.vscode/**',
];

const rootDir = dirname(fileURLToPath(import.meta.url));

export default eslintConfig(
  {
    typescript: true,
    tailwindcss: true,
    ignores,
  },
  {
    ignores,
    settings: {
      tailwindcss: {
        config: join(rootDir, 'packages/app/src/styles/global.css'),
      },
    },

  },
);
