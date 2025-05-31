// esbuild.config.js
import { build } from 'esbuild';
import tsconfigPaths from 'esbuild-plugin-tsconfig-paths';

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outdir: 'dist',
    packages: 'external',
    plugins: [tsconfigPaths()],
}).catch(() => process.exit(1));
