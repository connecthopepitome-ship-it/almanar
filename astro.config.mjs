import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://almanartech.ae',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react()
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});

