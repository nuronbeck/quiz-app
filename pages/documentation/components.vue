<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <h4 class="mb-8pt">Structure</h4>
    <p class="text-70 measure-paragraph-max">The <code>components/</code> directory contains your Vue.js Components.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── components
        │   ├── App
        │   ├── Card.vue
        │   ├── Charts
        │   ├── ComponentDoc.vue
        │   ├── Hljs.vue
        │   ├── MdIcon.vue
        │   ├── PageSeparator.vue
        │   ├── Player.vue
        │   ├── README.md
        │   └── StaffTable.vue
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Components'),
      meta: {
        prev: {
          title: 'RTL',
          to: 'documentation-rtl'
        },
        next: {
          title: 'Sidebar',
          to: 'documentation-sidebar'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Components')
    }
  }
}
</script>
