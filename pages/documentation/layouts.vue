<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 measure-paragraph-max">The <code>layouts/</code> directory contains your Application Layouts. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/views#layouts">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── layouts
        │   ├── README.md
        │   ├── blank.vue
        │   ├── default.vue
        │   ├── error.vue
        │   ├── fixed.vue
        │   └── home.vue
      " />

    <h4 class="mb-8pt">Default Layout</h4>
    <p class="text-70 measure-paragraph-max">Set the default layout from <code>store/settings.js</code>. Possible values are any layout file names available in the <code>layouts/</code> folder.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            layout: {
              layout: 'default'
            }
          }
        })
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Layouts'),
      meta: {
        prev: {
          title: 'Navbar',
          to: 'documentation-navbar'
        },
        next: {
          title: 'Pages',
          to: 'documentation-pages'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Layouts')
    }
  }
}
</script>
