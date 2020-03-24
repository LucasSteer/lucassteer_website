export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // TODO: change the title depending on the page
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // TODO: what does this do?
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // TODO: import all of the favicons and settings
      // <link rel="shortcut icon" href="/assets/favicon/favicon.ico">
      // <link rel="icon" sizes="16x16 32x32 64x64" href="/assets/favicon/favicon.ico">
      // <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-192.png">
      // <link rel="icon" type="image/png" sizes="160x160" href="/assets/favicon/favicon-160.png">
      // <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96.png">
      // <link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon/favicon-64.png">
      // <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png">
      // <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16.png">
      // <link rel="apple-touch-icon" href="/assets/favicon/favicon-57.png">
      // <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/favicon-114.png">
      // <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/favicon-72.png">
      // <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/favicon-144.png">
      // <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/favicon-60.png">
      // <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/favicon-120.png">
      // <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/favicon-76.png">
      // <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/favicon-152.png">
      // <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/favicon-180.png">
      // <meta name="msapplication-TileColor" content="#FFFFFF">
      // <meta name="msapplication-TileImage" content="/assets/favicon/favicon-144.png">
      // <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml">
    ],
  },
  // TODO: see if I can remove unused config options
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/app.css',
    purgeCSSInDev: true,
    exposeConfig: false,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
};
