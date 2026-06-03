import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://daocore.ai',
  output: 'static',
  build: {
    assets: 'assets'
  },
});
