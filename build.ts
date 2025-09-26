import { build } from 'esbuild';
import path from 'path';
import tsconfig from './tsconfig.json';

const baseUrl = path.resolve(__dirname, tsconfig.compilerOptions.baseUrl || 'src');

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: 'dist/app.js',
  sourcemap: true,
  external: ['koa', 'fs', 'path'],
  plugins: [
    {
      name: 'tsconfig-paths',
      setup(build) {
        build.onResolve({ filter: /^@\/(.*)$/ }, args => {
          let resolvedPath = path.join(baseUrl, args.path.replace(/^@\//, ''));
          if (!resolvedPath.endsWith('.ts') && !resolvedPath.endsWith('.js')) {
            resolvedPath += '.ts';
          }
          return { path: resolvedPath };
        });
      },
    },
  ],
}).catch(() => process.exit(1));
