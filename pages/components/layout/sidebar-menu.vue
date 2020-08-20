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
        component: 'FmvSidebarMenu',
        nav: ['usage']
      },
      title: 'Sidebar Menu',
      code: `
        <template>
          <fmv-drawer :align="align">
            <fmv-sidebar
              :align="align"
              type="dark"
              variant="bg-dark">
              <no-ssr>
                <div class="sidebar-p-y">
                  <div class="sidebar-heading">Applications</div>

                  <!-- Apps menu -->
                  <fmv-sidebar-menu 
                    :menu="apps"
                    class="sm-active-button-bg" />

                  <!-- Components menu -->
                  <div class="sidebar-heading">Components</div>
                  <fmv-sidebar-menu :menu="components" />

                </div>
              </no-ssr>
            </fmv-sidebar>
          </fmv-drawer>
        </template>
        
        <script>
        import {FmvDrawer, FmvSidebar, FmvSidebarMenu} from 'fmv-layout'

        export default {
          components: {
            FmvDrawer,
            FmvSidebar,
            FmvSidebarMenu
          },
          data() {
            return {
              align: 'start',
              apps: [
                {
                  label: 'Student',
                  route: '/',
                  icon: {
                    type: 'md-icon',
                    id: 'account_box'
                  }
                }
              ],
              components: [
                {
                  id: 'uiComponents',
                  label: 'User Interface',
                  icon: {
                    type: 'md-icon',
                    id: 'tune'
                  },
                  open: false,
                  children: [
                    {
                      label: 'Forms',
                      route: '/components/ui/forms'
                    }
                  ]
                }
              ]
            }
          }
        }
        <\/script>
      `
    }
  }
}
</script>
