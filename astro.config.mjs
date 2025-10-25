// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      CHARACTERS: envField.string({ context: 'client', access: 'public' }),
      NUMBERS: envField.string({ context: 'client', access: 'public' }),
      SYMBOLS: envField.string({ context: 'client', access: 'public' }),
    }
  }
});