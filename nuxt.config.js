const pkg = require('./package')
const webpack = require('webpack')

const i18nConfig = require('./config/i18n')
const defaultLocale = i18nConfig.defaultLocale
const fallbackLocale = i18nConfig.fallbackLocale
const dateTimeFormats = i18nConfig.dateTimeFormats
const numberFormats = i18nConfig.numberFormats
const locales = i18nConfig.locales

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head() {
    return {
      title: 'Quiz App',
      htmlAttrs: {
        dir: `${this.$store && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Luma Vue - Nuxt & Vue.js Learning Management System Admin Template' },
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { href: 'https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&amp;display=swap', rel: 'stylesheet' }
      ],
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2239ff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/vendor/material-icons.scss',
    '~/assets/scss/vendor/fontawesome.scss',
    '~/assets/scss/app.scss',
    '~/assets/scss/vendor/quill.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vendor.js',
    { src: '~plugins/quill', ssr: false },
    { src: '~/plugins/vuelidate' }
    // custom i18n implementation
    // '~/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://www.npmjs.com/package/nuxt-sweetalert2
    'nuxt-sweetalert2',
    'nuxt-vue-select',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      lazy: true,
      vueI18nLoader: true,
      langDir: 'locales/',
      locales,
      defaultLocale,
      vueI18n: {
        fallbackLocale,
        dateTimeFormats,
        numberFormats,
        silentTranslationWarn: true
      }
    }]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: `http://quiz.workey.space/api/v1`
  },



  render: {
    resourceHints: false
  },

  router: {
    base: '/',
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    middleware: [
      'settings'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },

    transpile: [
      // 'bootstrap-vue', 
      // /(luma)/
    ],

    postcss: {
      plugins: {
        'postcss-rtl': {}
      }
    },

    loaders: {
      scss: {
        sassOptions: {
          includePaths: ['node_modules']
        }
      }
    },

    html: { 
      minify: {
        minifyJS: false
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'domFactory': 'dom-factory'
      })
    ],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          include: [
            // when using "npm link"
            // /node_modules\/luma/
          ],
          exclude: /(node_modules)/
        })
      }
    }
  }
}