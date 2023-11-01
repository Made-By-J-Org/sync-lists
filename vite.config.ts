/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {plugins: [jotaiDebugLabel, jotaiReactRefresh]},
      include: /\.(js|jsx|ts|tsx)$/,
      jsxRuntime: 'classic',
      fastRefresh: false // turn off for tests to run
    }), eslint(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  server: {
    cors: false
  },
});
