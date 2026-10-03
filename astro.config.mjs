// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yerdana.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'kz',
    locales: ['kz', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
