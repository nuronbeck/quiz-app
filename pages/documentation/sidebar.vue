<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <h4 class="mb-8pt">App Drawer Alignment</h4>
    <p class="text-70 measure-paragraph-max">The drawer is a component that holds the sidebar and controls things such as positioning in the document or within a more complex layout.</p>
    <p class="text-70 measure-paragraph-max">You can configure the alignment of the main drawer from <code>store/settings.js</code>. Possible values are <code>start</code> and <code>end</code>. These values correspond to left and right, however they are called start and end because they take RTL into consideration.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            'default::mainDrawer': {
              align: 'start'
            }
          }
        })
      " />

    <h4 class="mb-8pt">App Sidebar Skin</h4>
    <p class="text-70 measure-paragraph-max">The sidebar is a component that holds various elements like the sidebar menu. It's also responsible for applying a skin to these elements. You can inspect the application sidebar used in the main drawer from <code>components/App/Sidebar.vue</code>.</p>
    <p class="text-70 measure-paragraph-max">Configure the sidebar skin of the main drawer from <code>store/settings.js</code>. Possible values are <code>light</code> and <code>dark</code>. The values correspond to configuration keys in <code>store/sidebarConfig.js</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            'default::mainDrawer': {
              sidebar: 'dark'
            }
          }
        })
      " />

    <h4 class="mb-8pt">Layout Settings</h4>
    <p class="text-70 measure-paragraph-max">We can have different settings per layout. The following example configures the application sidebar skin and drawer alignment for the <code>boxed</code> layout.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            'boxed::mainDrawer': {
              align: 'start',
              sidebar: 'light'
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
      title: this.$t('Sidebar'),
      meta: {
        prev: {
          title: 'Components',
          to: 'documentation-components'
        },
        next: {
          title: 'Navbar',
          to: 'documentation-navbar'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Sidebar')
    }
  }
}
</script>
