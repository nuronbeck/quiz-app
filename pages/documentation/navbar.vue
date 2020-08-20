<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 lead measure-lead-max">You can inspect the application navbar from <code>components/App/Navbar.vue</code>.</p>

    <h4 class="mb-8pt">App Navbar Skin</h4>
    <p class="text-70 measure-paragraph-max">Configure the application navbar skin from <code>store/settings.js</code>. Possible values are <code>light</code> and <code>dark</code>. The values correspond to configuration keys in <code>store/navbarConfig.js</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            'default::mainNavbar': {
              navbar: 'light'
            }
          }
        })
      " />

    <h4 class="mb-8pt">Layout Settings</h4>
    <p class="text-70 measure-paragraph-max">We can have different settings per layout. The following example configures the application navbar skin for the <code>fixed</code> layout.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            'fixed::mainNavbar': {
              navbar: 'dark'
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
      title: this.$t('Navbar'),
      meta: {
        prev: {
          title: 'Sidebar',
          to: 'documentation-sidebar'
        },
        next: {
          title: 'Layouts',
          to: 'documentation-layouts'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Navbar')
    }
  }
}
</script>
