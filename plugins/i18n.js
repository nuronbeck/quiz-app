import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const dateTimeFormats = {
    // 'en-US': {
    //   short: {
    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric'
    //   }
    // },
    'ru-RU': {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    },
    'uz-UZ': {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  }

  const fallbackLocale = 'ru'

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale,
    dateTimeFormats,
    messages: {
      // en: require('~/locales/en.json'),
      ro: require('~/locales/ru.json'),
      uz: require('~/locales/uz.json')
    },
    silentTranslationWarn: true
  })

  app.i18n.path = (link, locale = app.i18n.locale) => {
    store.state.locales.forEach(registeredLocale => {
      if (link.indexOf('/' + registeredLocale + '/') === 0) {
        const toReplace = '^/' + registeredLocale + '/'
        const re = new RegExp(toReplace)
        link = link.replace(re, '/')
      }
    })

    if (locale === fallbackLocale) {
      return `${link}`
    }

    // remove trailing slash
    link = link.replace(/^\//, '')

    return `/${locale}/${link}`
  }
}
