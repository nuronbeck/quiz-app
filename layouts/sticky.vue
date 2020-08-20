<template>
  <div
    :class="[ subLayout ? 'h-100vh' : null ]">
    <fmv-header-layout 
      content-id="header-layout-content"
      :content-class="[ 'page-content', subLayout ? 'h-100vh' : null ]"
      header-effects="waterfall"
      :header-class="[headerClass, (subLayout ? 'mb-0' : null)]">
      
      <app-navbar
        slot="header" 
        data-primary
        navbar-toggle-class="d-lg-none"
        :guest="guest" />

      <fmv-drawer-layout
        responsive-width="992px"
        :drawer-align="mainDrawerAlign"
        content-id="drawer-layout-content"
        drawer-content-class="top-navbar">

        <app-sidebar
          slot="drawer"
          :sidebar-brand="false"
          :sidebar-search="false"
          class="sidebar-p-t" />

        <fmv-drawer-layout 
          v-if="subLayout"
          responsive-width="992px"
          has-scrolling-region
          :drawer-id="subLayoutDrawerId"
          :drawer-align="subLayoutDrawerAlign"
          drawer-classes="sub-layout-drawer"
          content-id="sub-layout-content"
          fullbleed
          class="flex"
          @ps-scroll-y="$root.$emit('bv::hide::popover')">
          <nuxt />

          <component
            :is="subLayoutDrawer"
            v-if="subLayoutDrawer"
            slot="drawer" />
        </fmv-drawer-layout> 
        
        <template v-else>
          <nuxt />
        
          <app-footer 
            :container-class="containerClass"
            class="bg-white" />
        </template>
      </fmv-drawer-layout> 
    </fmv-header-layout>
    
    <app-settings
      v-if="$store.state.settings.ui"
      :redirect-layout="redirectLayout" />

    <component
      :is="subLayoutDrawer"
      v-if="subLayoutDrawer && !subLayout" />
  </div>
</template>

<script>
import {
  FmvHeaderLayout, 
  FmvDrawerLayout, 
  FmvDrawer
} from 'fmv-layout'

import AppNavbar from '~/components/App/Navbar'
import AppSettings from '~/components/App/Settings'
import AppSidebar from '~/components/App/Sidebar'
import AppFooter from '~/components/App/Footer'

import mainDrawerMixin from '~/mixins/main-drawer'
import layoutConfigMixin from '~/mixins/layout-config'
import subLayoutMixin from '~/mixins/sub-layout'

export default {
  components: {
    FmvHeaderLayout,
    FmvDrawerLayout,
    FmvDrawer,
    AppNavbar,
    AppSettings,
    AppSidebar,
    AppFooter
  },
  mixins: [
    mainDrawerMixin,
    layoutConfigMixin,
    subLayoutMixin
  ],
  head: {
    bodyAttrs: {
      class: 'layout-sticky'
    }
  },
  data() {
    return {
      redirectLayout: true,
      headerClass: 'mb-0',
      guest: false
    }
  },
  created() {
    this.$root.$on('luma::redirectLayout', redirectLayout => this.redirectLayout = redirectLayout)
    this.$root.$on('luma::guest', guest => this.guest = guest)
    this.$root.$on('luma::headerClass', headerClass => {
      if (headerClass !== undefined) {
        this.headerClass = headerClass
      }
    })
  }
}
</script>
