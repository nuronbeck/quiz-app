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
        component: 'FmvDrawer',
        nav: ['usage']
      },
      title: 'Drawer',
      code: `
        <template>
          <fmv-drawer align="start">
            // drawer content
          </fmv-drawer>
        </template>
        
        <script>
        import {FmvDrawer} from 'fmv-layout'

        export default {
          components: {
            FmvDrawer
          }
        }
        <\/script>
      `
    }
  }
}
</script>
