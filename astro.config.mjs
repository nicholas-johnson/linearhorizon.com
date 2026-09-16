// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://linearhorizon.com',
  output: 'static',
  prefetch: true,
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [sitemap()],
  redirects: {
    '/approach': '/consulting',
    '/claude-vs-grok-bot': '/compare',
    '/claude-vs-grokbot': '/compare',
    '/whitepapers/four-stages-of-claude-adoption': '/whitepapers/four-stages-of-ai-adoption',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
