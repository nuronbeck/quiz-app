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
        component: 'FmvHeader',
        nav: ['usage']
      },
      title: 'Header',
      code: `
        <template>
          <fmv-header fixed>
            // header content
          </fmv-header>
        </template>
        
        <script>
        import {FmvHeader} from 'fmv-layout'

        export default {
          components: {
            FmvHeader
          }
        }
        <\/script>
      `
    }
  }
}
</script>
