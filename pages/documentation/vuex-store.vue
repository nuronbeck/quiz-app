<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 measure-paragraph-max">The <code>store/</code> directory contains your Vuex Store files. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/vuex-store">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── store
        │   ├── README.md
        │   ├── index.js
        │   ├── layoutConfig.js
        │   ├── navbarConfig.js
        │   ├── settings.js
        │   ├── sidebarConfig.js
        │   └── sidebarMenuConfig.js
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Vuex Store'),
      meta: {
        prev: {
          title: 'Project Structure',
          to: 'documentation-project-structure'
        },
        next: {
          title: 'Settings',
          to: 'documentation-settings'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Vuex Store')
    }
  }
}
</script>
