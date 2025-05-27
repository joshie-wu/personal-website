import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // This ensures static generation
  site: 'https://joshie-wu.github.io',
  base: '/personal-website',
});