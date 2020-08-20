<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 lead measure-lead-max">{{ $store.state.brand }} includes internationalization support provided by <a href="https://kazupon.github.io/vue-i18n/introduction.html" target="_blank" class="text-accent">Vue I18n</a> &mdash; the internationalization plugin for Vue.js.</p>

    <h4 class="mb-8pt">Default</h4>
    <p class="text-70 measure-paragraph-max">Choose which language to use by default. Edit <code>config/i18n.js</code></p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const defaultLocale = 'en'
      " />

    <h4 class="mb-8pt">Fallback</h4>
    <p class="text-70 measure-paragraph-max">Choose which language to use when your preferred language lacks a translation. Edit <code>config/i18n.js</code></p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const fallbackLocale = 'en'
      " />

    <h4 class="mb-8pt">Global Locales</h4>
    <p class="text-70 measure-paragraph-max">The <code>locales/</code> directory contains localization files. Translations here are available globally in your app.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── locales
        │   ├── en.json
        │   └── ro.json
      " />

    <h4 class="mb-8pt">Adding Languages</h4>
    <p class="text-70 measure-paragraph-max">Edit <code>config/i18n.js</code> to add or remove <code>locales</code> and create the corresponding <code>locales/$LOCALE.json</code> localization file if needed.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const locales = [
          { code: 'en', iso: 'en-US', file: 'en.json' },
          { code: 'ro', iso: 'ro-RO', file: 'ro.json' }
        ]
      " />

    <p class="text-70 measure-paragraph-max">You can globally translate using <code>$t</code> or <code>$tc</code> in the root Vue instance and any composed component.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      :code="code" />

    <h4 class="mb-8pt">Component Based Localization</h4>
    <p class="text-70 measure-paragraph-max">You can also manage locale info for each component separately, which might be more convenient due to Vue components oriented design.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      :code="component" />

    <h4 class="mb-8pt">DateTime</h4>
    <p class="text-70 measure-paragraph-max">You can localize the datetime with your definition formats. Edit <code>config/i18n.js</code>. Available options in <a href="https://kazupon.github.io/vue-i18n/guide/datetime.html" target="_blank" class="text-accent">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const dateTimeFormats = {
          'en-US': {
            short: {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            }
          }
        }
      " />

    <hljs 
      class="card card-body bg-dark measure-lead-max"
      :code="dateTimeFormats" />

    <h4 class="mb-8pt">Numbers</h4>
    <p class="text-70 measure-paragraph-max">You can localize numbers with your definition formats. Edit <code>config/i18n.js</code>. Available options in <a href="https://kazupon.github.io/vue-i18n/guide/number.html" target="_blank" class="text-accent">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const numberFormats = {
          'en-US': {
            currency: {
              style: 'currency', currency: 'USD'
            }
          }
        }
      " />

    <hljs 
      class="card card-body bg-dark measure-lead-max"
      :code="numberFormats" />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Translation'),
      meta: {
        prev: {
          title: 'Sidebar Menu',
          to: 'documentation-sidebar-menu'
        }
      },
      code: `
        <h1>{{ $t('hello') }}</h1>
      `,
      component: `
        <template>
          <div>
            <h1>{{ $t('hello') }}</h1>
          </div>
        </template>

        <i18n>
          {
            "en": {
              "hello": "hello world!"
            },
            "ja": {
              "hello": "こんにちは、世界！"
            }
          }
        </i18n>
      `,
      dateTimeFormats: `
        <p>{{ $d(new Date(), 'short') }}</p>
      `,
      numberFormats: `
         <p>{{ $n(100, 'currency', 'en-US') }}</p>
      `
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Translation')
    }
  }
}
</script>
