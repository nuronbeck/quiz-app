<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <h4 class="mb-8pt">Configuration</h4>
    <p class="text-70 measure-paragraph-max">Customize the sidebar menu from <code>store/sidebarMenuConfig.js</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        const home = {
          label: 'Home',
          route: 'student-home',
          icon: {
            type: 'md-icon',
            id: 'home'
          }
        }

        const browseCourses = {
          label: 'Browse Courses',
          route: 'student-courses',
          icon: {
            type: 'md-icon',
            id: 'local_library'
          }
        }

        const pages = {
          id: 'pagesMenu',
          label: 'Pages',
          open: false,
          children: [
            home,
            browseCourses
          ]
        }

        export const state = () => ({
          menu: [
            home,
            browseCourses,
            submenu
          ]
        })
      " />

    <h4 class="mb-8pt">Component</h4>
    <p class="text-70 measure-paragraph-max">Then use the <code>&lt;fmv-sidebar-menu&gt;</code> component to render the sidebar menu. The following example is simplified in order to cover the basic usage, however you should check the application sidebar component in <code>components/App/Sidebar.vue</code></p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="html"
      :code="component" />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Sidebar Menu'),
      meta: {
        prev: {
          title: 'Pages',
          to: 'documentation-pages'
        },
        next: {
          title: 'Translation',
          to: 'documentation-translation'
        }
      },
      component: `
        <template>
          <fmv-sidebar-menu 
            :menu="sidebarMenuConfig.menu" />
        </template>

        <script>
          import {FmvSidebarMenu} from 'fmv-layout'

          export default {
            computed: {
              sidebarMenuConfig() {
                return this.$store.state.sidebarMenuConfig
              }
            }
          }
        <\/script>
      `
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Sidebar Menu')
    }
  }
}
</script>
