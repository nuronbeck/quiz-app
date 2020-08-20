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
        component: 'FmvDrawerLayout',
        slots: [
          {
            name: 'default',
            description: 'The page content.'
          },
          {
            name: 'drawer',
            description: 'Place the sidebar or other content into the drawer.'
          }
        ],
        nav: ['usage']
      },
      title: 'Drawer Layout',
      code: `
        <template>
          <fmv-drawer-layout 
            align="start"
            responsive-width="992px"
            push>
            
            <div slot="drawer">
              // drawer content
            </div>

            // page content
          </fmv-drawer-layout>
        </template>
        
        <script>
        import {FmvDrawerLayout} from 'fmv-layout'

        export default {
          components: {
            FmvDrawerLayout
          }
        }
        <\/script>
      `
    }
  }
}
</script>
