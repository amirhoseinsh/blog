import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true, // or use '0.0.0.0' explicitly
      },
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind()],
});