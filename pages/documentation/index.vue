<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="lead text-black-70 measure-lead-max"><strong>{{ $store.state.brand }}</strong> - A beautifully crafted user interface for modern Learning web applications, with examples for all the website pages possibly needed for a LMS application, covering the most important roles &mdash; the <strong>student</strong> and the <strong>instructor</strong>.</p>

    <p class="text-black-70 lead measure-paragraph-max"><strong>{{ $store.state.brand }} Vue</strong> is the Vue.js version of the <a 
      target="_blank"
      class="text-accent" 
      href="https://themeforest.net/item/luma-education-platform-lms-admin-template/26541343">Luma - HTML Learning Managenent Application</a>. It's native Vue.js and it has 100% feature parity with the HTML version.</p>

    <h4>Nuxt.js</h4>
    <p class="text-black-70 measure-paragraph-max">Aside the fact it's built entirely with Vue.js and Bootstrap Vue, {{ $store.state.brand }} Vue is stacked on Nuxt.js - The Vue.js Framework. Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable. <strong>Learn more about Nuxt.js</strong> at <a 
      target="_blank"
      class="text-accent" 
      href="https://nuxtjs.org">https://nuxtjs.org</a>.</p>

    <h4>Vuex</h4>
    <p class="text-black-70 measure-paragraph-max mb-24pt">{{ $store.state.brand }} Vue is using Vuex as it's state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. <strong>Learn more about Vuex</strong> at <a 
      target="_blank"
      class="text-accent" 
      href="https://vuex.vuejs.org">https://vuex.vuejs.org</a>.</p>

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Introduction'),
      meta: {
        next: {
          title: 'Installation',
          to: 'documentation-installation'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Introduction')
    }
  }
}
</script>
