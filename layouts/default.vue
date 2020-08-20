<template>
  <div
    :class="[ subLayout ? 'h-100vh' : null ]">
    <fmv-drawer-layout
      :drawer-align="mainDrawerAlign"
      content-id="drawer-layout-content" 
      :content-class="[ 'page-content', subLayout ? 'd-flex flex-column' : null ]"
      :class="drawerLayoutClass">
      
      <app-sidebar 
        slot="drawer"
        :sidebar-search="sidebarSearch"
        :sidebar-brand-class="sidebarBrandClass" />
      
      <app-navbar
        navbar-toggle-class="d-lg-none"
        navbar-brand-class="d-lg-none"
        :navbar-search="false"
        :guest="guest" />
      
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

    <app-settings
      v-if="$store.state.settings.ui" />

    <component
      :is="subLayoutDrawer"
      v-if="subLayoutDrawer && !subLayout" />
  </div>
</template>

<script>
import {FmvDrawerLayout} from 'fmv-layout'

import AppNavbar from '~/components/App/Navbar'
import AppSidebar from '~/components/App/Sidebar'
import AppSettings from '~/components/App/Settings'
import AppFooter from '~/components/App/Footer'

import mainDrawerMixin from '~/mixins/main-drawer'
import layoutConfigMixin from '~/mixins/layout-config'
import subLayoutMixin from '~/mixins/sub-layout'

export default {
  components: {
    FmvDrawerLayout,
    AppNavbar,
    AppSidebar,
    AppSettings,
    AppFooter
  },
  mixins: [
    mainDrawerMixin,
    layoutConfigMixin,
    subLayoutMixin
  ],
  head: {
    bodyAttrs: {
      class: 'layout-app'
    }
  },
  data() {
    return {
      guest: false
    }
  },
  computed: {
    sidebarSearch() {
      return true
    },
    sidebarBrandClass() {
      return null
    },
    drawerLayoutClass() {
      return null
    }
  },
  created() {
    this.$root.$on('luma::guest', guest => this.guest = guest)
  }
}
</script>
