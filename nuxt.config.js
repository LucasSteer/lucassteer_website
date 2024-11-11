import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-CA',
      },
      title: 'Lucas Steer',
      meta: [
        {
          name: 'description',
          content:
            'The personal webpage of Lucas Steer, a Full-Stack Software Engineer based out of Toronto, Canada.',
        },
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'msapplication-TileColor',
          content: '#da532c',
        },
        {
          name: 'msapplication-config',
          content: '/favicons/browserconfig.xml',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/favicons/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        {
          rel: 'shortcut icon',
          href: '/favicons/favicon.ico',
        },
      ],
    },
  },

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
  target: 'static',

  generate: {
    subFolders: false,
    dir: 'docs', // for GitHub pages
    fallback: '404.html',
  },

  compatibilityDate: '2024-11-11',
});
