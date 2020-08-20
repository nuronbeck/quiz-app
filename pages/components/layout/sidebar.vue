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
        component: 'FmvSidebar',
        nav: ['usage']
      },
      title: 'Sidebar',
      code: `
        <template>
          <fmv-drawer :align="align">
            <fmv-sidebar
              :align="align"
              type="dark"
              variant="bg-dark">
              // sidebar content
            </fmv-sidebar>
          </fmv-drawer>
        </template>
        
        <script>
        import {FmvDrawer, FmvSidebar} from 'fmv-layout'

        export default {
          components: {
            FmvDrawer,
            FmvSidebar
          },
          data() {
            return {
              align: 'start'
            }
          }
        }
        <\/script>
      `
    }
  }
}
</script>
