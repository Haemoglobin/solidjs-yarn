/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    // transformMode: { web: [/\.[jt]sx?$/] },
    setupFiles: ['@testing-library/jest-dom/extend-expect.js'],
    // otherwise, solid would be loaded twice:
    // deps: { registerNodeLoader: true },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
