module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  ignorePatterns: ["**/*.config.js", "docs/"],
  // plugins: [
  //   'prettier'
  // ],
  // add your custom rules here
  rules: {
  }
}
