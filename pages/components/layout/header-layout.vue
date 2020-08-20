<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <hljs
        id="usage"
        :code="code"
        class="card card-body bg-dark" />

    </docs-page>
  </div>
</template>

<script>
import Page from '~/components/App/ComponentsPage'

export default {
  extends: Page,
  data() {
    return {
      meta: {
        component: 'FmvHeaderLayout',
        slots: [
          {
            name: 'default',
            description: 'The page content.'
          },
          {
            name: 'header',
            description: 'Place the navbar or other content into the header.'
          }
        ],
        nav: ['usage']
      },
      title: 'Header Layout',
      code: `
        <template>
          <fmv-header-layout header-fixed>
            <div slot="header">
              // header content (i.e. navbar)
            </div>

            // page content
          </fmv-header-layout>
        </template>
        
        <script>
        import {FmvHeaderLayout} from 'fmv-layout'

        export default {
          components: {
            FmvHeaderLayout
          }
        }
        <\/script>
      `
    }
  }
}
</script>
