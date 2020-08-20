<template>
  <div>
    <fmv-header-layout
      content-id="header-layout-content" 
      content-class="page-content"
      header-effects="parallax-background waterfall"
      header-image="/images/photodune-4161018-group-of-students-m.jpg"
      header-class="mdk-header--bg-dark bg-dark mb-0"
      header-content-class="justify-content-center"
      header-condenses
      header-fixed
      @header-target-scroll="handleScroll($event)">

      <template slot="header">
        <app-navbar
          :class="navbarClass" 
          data-primary />

        <div 
          class="text-center py-112pt flex-column align-items-center justify-content-center"
          :class="containerClass">

          <slot name="header-content">
            <div
              class="d-flex flex-column align-items-center justify-content-center mb-24pt">
              <fmv-avatar
                :title="true"
                title-class="bg-primary"
                size="xl"
                to="/"
                class="mb-16pt">
                <b-img 
                  src="/images/illustration/student/128/white.svg"
                  class="img-fluid" 
                  alt="Luma Vue Nuxt" />
              </fmv-avatar>
              <h1 
                class="text-white text-shadow mb-4pt"
                v-text="'Luma Education Platform'" />

              <b-form-rating
                class="b-rating-inline" 
                value="5" 
                variant="rating"
                size="lg"
                readonly
                inline
                no-border />
            </div>

            <p class="text-white text-shadow text-headings font-weight-normal measure-paragraph mx-auto mb-4pt">&ldquo; Incredible value for a fraction of what would cost to commission an advanced UI/UX for any modern Education Platform with tools for Enterprise Resource Planning and for Teachers to bring their knowledge online &bdquo;</p>
            <p class="text-white text-headings mb-0"><small>&mdash; Laza Bogdan @ FrontendMatter</small></p>
          </slot>

        </div>
      </template>

      <slot />

      <app-footer 
        :container-class="containerClass"
        class="bg-white" />
    </fmv-header-layout>

    <!-- <fmv-drawer
      :align="mainDrawerAlign">
      <app-sidebar />
    </fmv-drawer> -->

  </div>
</template>

<script>
import {FmvHeaderLayout, FmvDrawer} from 'fmv-layout'
import AppNavbar from '~/components/Landing/Navbar'
import AppSidebar from '~/components/App/Sidebar'
import mainDrawerMixin from '~/mixins/main-drawer'
import layoutConfigMixin from '~/mixins/layout-config'
import AppFooter from '~/components/App/Footer'

export default {
  components: {
    FmvHeaderLayout,
    // FmvDrawer,
    AppNavbar,
    // AppSidebar,
    AppFooter
  },
  mixins: [
    mainDrawerMixin,
    layoutConfigMixin
  ],
  head: {
    bodyAttrs: {
      class: 'layout-fixed'
    }
  },
  data() {
    return {
      navbarClass: {
        'bg-transparent': true
      }
    }
  },
  methods: {
    handleScroll(state) {
      this.navbarClass['bg-transparent'] = state.progress <= 0.2
    }
  }
}
</script>
