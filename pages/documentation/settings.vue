<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <h4 class="mb-8pt">Brand</h4>
    <p class="text-70 measure-paragraph-max">Update the brand name used globally in the app from <code>store/index.js</code></p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          brand: 'Luma'
        })
      " />
    <p class="text-70 measure-paragraph-max">You can use <code>$store.state.brand</code> in any component.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="html"
      :code="brand" />

    <h4 class="mb-8pt">Settings UI</h4>
    <p class="text-70 measure-paragraph-max">Enable or disable the ability to update the application settings via the user interface from <code>store/settings.js</code></p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          ui: true
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
      title: this.$t('Settings'),
      brand: `
        <h1>{{ $store.state.brand }}</h1>
      `,
      meta: {
        prev: {
          title: 'Vuex Store',
          to: 'documentation-vuex-store'
        },
        next: {
          title: 'RTL',
          to: 'documentation-rtl'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Settings')
    }
  }
}
</script>
