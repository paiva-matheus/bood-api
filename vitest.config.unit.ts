import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', '!src/tests'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/properties': path.resolve(__dirname, './src/properties'),
      '@/proposals': path.resolve(__dirname, './src/proposals'),
    },
  },
});
