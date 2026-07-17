// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical production URL — required for correct sitemap/canonical URLs
  // on GitHub Pages with a custom domain. No `base` needed: this is a
  // user/root Pages site served from the domain root.
  site: 'https://jinfusion.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});