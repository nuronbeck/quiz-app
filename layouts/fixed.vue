<template>
  <div
    :class="[ subLayout ? 'h-100vh' : null ]">
    <fmv-header-layout 
      content-id="header-layout-content"
      :content-class="[ 'page-content', subLayout ? 'h-100vh' : null ]"
      :header-effects="headerEffects"
      :header-image="headerImage"
      :header-content-class="headerContentClass"
      :header-condenses="headerCondenses"
      :header-class="[headerClass, (subLayout ? 'mb-0' : null)]">

      <template slot="header">
        <app-navbar
          data-primary
          :custom-navbar-container-class="subLayout ? 'container-fluid' : null"
          :guest="guest"
          class="p-0" />

        <component
          :is="headerContentComponent"
          v-if="headerContentComponent"
          v-bind="headerContentComponentProps" />
      </template>

      <fmv-drawer-layout 
        v-if="subLayout"
        responsive-width="992px"
        has-scrolling-region
        :drawer-id="subLayoutDrawerId"
        :drawer-align="subLayoutDrawerAlign"
        drawer-classes="sub-layout-drawer"
        content-id="sub-layout-content"
        fullbleed
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
    </fmv-header-layout>
    
    <fmv-drawer
      :align="mainDrawerAlign">
      <app-sidebar />
    </fmv-drawer>
    
    <app-settings
      v-if="false && $store.state.settings.ui"
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
      class: 'layout-fixed'
    }
  },
  data() {
    return {
      redirectLayout: true,
      headerClass: null,
      headerEffects: 'waterfall',
      headerImage: null,
      headerContentClass: null,
      headerCondenses: false,
      headerContentComponent: null,
      headerContentComponentProps: null,
      guest: false
    }
  },
  created() {
    this.$root.$on('luma::redirectLayout', redirectLayout => this.redirectLayout = redirectLayout)
    this.$root.$on('luma::guest', guest => this.guest = guest)
    this.$root.$on('luma::headerClass', headerClass => this.headerClass = headerClass)
    this.$root.$on('luma::headerEffects', headerEffects => this.headerEffects = headerEffects)
    this.$root.$on('luma::headerImage', headerImage => this.headerImage = headerImage)
    this.$root.$on('luma::headerContentClass', headerContentClass => this.headerContentClass = headerContentClass)
    this.$root.$on('luma::headerCondenses', headerCondenses => this.headerCondenses = headerCondenses)
    this.$root.$on('luma::headerContentComponent', headerContentComponent => this.headerContentComponent = headerContentComponent)
    this.$root.$on('luma::headerContentComponentProps', headerContentComponentProps => this.headerContentComponentProps = headerContentComponentProps)
  }
}
</script>
