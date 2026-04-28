import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app',
});
