<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <p class="text-70 measure-paragraph-max">Enable RTL or Right-to-Left mode from <code>store/settings.js</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        export const state = () => ({
          state: {
            layout: {
              rtl: true
            }
          }
        })
      " />

    <h4 class="mb-8pt">How it works</h4>
    <p class="text-70 measure-paragraph-max">The process of converting regular styles to RTL is automatic and handled by <code>postcss-rtl</code>. This is already configured in <code>nuxt.config.js</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      lang="js"
      code="
        module.exports = {

          /*
           ** Headers of the page
           */
          head() {
            return {
              htmlAttrs: {
                dir: `${this.$store && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
              }
            }
          },

          build: {
            postcss: {
              plugins: {
                'postcss-rtl': {}
              }
            }
          }
        }
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('RTL'),
      meta: {
        prev: {
          title: 'Settings',
          to: 'documentation-settings'
        },
        next: {
          title: 'Components',
          to: 'documentation-components'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('RTL')
    }
  }
}
</script>
