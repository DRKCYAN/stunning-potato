import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app',
});
