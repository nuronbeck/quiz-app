<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 measure-paragraph-max">The <code>pages/</code> directory contains your Application Views and Routes. The framework reads all the <code>*.vue</code> files inside this directory and create the router of your application. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/routing">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── pages
        │   ├── README.md
        │   ├── account
        │   ├── components
        │   ├── documentation
        │   ├── forgot-password.vue
        │   ├── instructor
        │   ├── login.vue
        │   ├── pricing.vue
        │   ├── signup.vue
        │   ├── staff.vue
        │   └── student
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Pages'),
      meta: {
        prev: {
          title: 'Layouts',
          to: 'documentation-layouts'
        },
        next: {
          title: 'Sidebar Menu',
          to: 'documentation-sidebar-menu'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Pages')
    }
  }
}
</script>
