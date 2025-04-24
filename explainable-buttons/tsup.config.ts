import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  clean: true,
  loader: {
    '.scss': 'empty'
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  }
});