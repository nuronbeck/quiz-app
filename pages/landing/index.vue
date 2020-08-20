<template>
  <landing-page>
    <div class="container-fluid page-section page__container">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">

        <page-separator 
          title="Luma Learning Managenent System Family"
          center
          class="mb-24pt text-center" />

        <div 
          class="mx-auto"
          style="max-width: 616px;">

          <b-link
            to="landing/luma-vue-nuxt"
            class="card card-body bg-dark d-flex flex-sm-row align-items-center mb-24pt">
            <div class="d-flex flex align-items-center mb-16pt mb-sm-0">
              <span class="mr-12pt">
                <img 
                  src="/images/Vue.js_Logo_2.svg" 
                  alt="Luma Vue.js & Nuxt.js" 
                  width="56">
              </span>

              <div class="flex d-flex flex-column">
                <span class="card-title text-white mb-4pt">
                  <strong>Vue.js & Nuxt.js</strong> Version
                </span>
                <span class="d-flex align-items-center">
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">No jQuery</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">100% Vue</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">Bootstrap Vue</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">Nuxt.js</span>
                </span>
              </div>
            </div>
            <span>
              <span class="btn btn-rounded btn-outline-white">Luma Vue</span>
            </span>
          </b-link>

          <b-link
            to="landing/luma-bootstrap-html"
            class="card card-body bg-dark d-flex flex-sm-row align-items-center mb-0">
            <div class="d-flex flex align-items-center mb-16pt mb-sm-0">
              <span class="mr-12pt">
                <img 
                  src="/images/logo/bootstrap.svg" 
                  alt="Luma Bootstrap HTML" 
                  width="56">
              </span>

              <div class="flex d-flex flex-column">
                <span class="card-title text-white mb-4pt">
                  <strong>Bootstrap HTML</strong> Version
                </span>
                <span class="d-flex align-items-center">
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">jQuery</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">Bootstrap v4.5</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">HTML5</span>
                  <span 
                    class="badge badge-light font-weight-bold" 
                    style="margin: 2px;">SCSS</span>
                </span>
              </div>
            </div>
            <span>
              <span class="btn btn-rounded btn-outline-white">Luma HTML</span>
            </span>
          </b-link>
        </div>
      
      </div>
    </div>
  </landing-page>
</template>

<script>
import Page from '~/components/App/Page'
import LandingPage from '~/components/Landing/LandingPage'

export default {
  layout: 'blank',
  components: {
    LandingPage
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Home')
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Home')
    }
  }
}
</script>
