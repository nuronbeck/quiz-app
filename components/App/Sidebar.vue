<template>
  <fmv-sidebar
    ref="sidebar"
    :type="sidebarConfigValue('type')"
    :variant="sidebarConfigValue('variant')"
    @update="scrollIntoView">

    <!-- Search -->
    <div
      v-if="sidebarSearch"  
      class="d-flex align-items-center navbar-height">
      <b-form class="search-form search-form--black mx-16pt pr-0 pl-16pt">
        <b-form-input
          :placeholder="$t('Search')"
          type="text"
          class="pl-0" />
        <b-button variant="none">
          <md-icon>search</md-icon>
        </b-button>
      </b-form>
    </div>
    <!-- // END Search -->

    <span
      v-if="sidebarBrand" 
      class="sidebar-brand"
      :class="sidebarBrandClass">
      <fmv-avatar
        :title="true"
        title-class="bg-primary"
        size="xl"
        to="/"
        class="sidebar-brand-icon h-auto">
        <b-img 
          :src="brandImage" 
          class="img-fluid" 
          alt="logo" />
      </fmv-avatar>
      <span 
        v-text="$store.state.brand" />
    </span>

    <div class="sidebar-heading">{{ $t('Admin') }}</div>
    <fmv-sidebar-menu
      :menu="i18nMenu.admin"
      class="mb-24pt" />

    <div class="sidebar-heading">{{ $t('Student') }}</div>
    <fmv-sidebar-menu
      :menu="i18nMenu.student"
      class="mb-24pt" />

    <div class="sidebar-heading">Instructor</div>
    <fmv-sidebar-menu
      :menu="i18nMenu.instructor"
      class="mb-24pt" />

    <template
      v-if="menu.apps.length">
      <div class="sidebar-heading">{{ $t('Applications') }}</div>
      <fmv-sidebar-menu 
        :menu="i18nMenu.apps"
        class="mb-24pt" />
    </template>

    <div class="sidebar-heading">{{ $t('Components') }}</div>
    <fmv-sidebar-menu 
      :menu="i18nMenu.components"
      class="mb-24pt" />

    <div class="sidebar-heading">{{ $t('Documentation') }}</div>
    <fmv-sidebar-menu
      :menu="i18nMenu.documentation"
      class="mb-24pt" />
  </fmv-sidebar>
</template>

<script>
import mainDrawerMixin from '~/mixins/main-drawer'
import sidebarConfigMixin from '~/mixins/sidebar-config'
import {FmvSidebar, FmvSidebarMenu} from 'fmv-layout'

import { polyfill } from "seamless-scroll-polyfill"
polyfill()

export default {
  components: {
    FmvSidebar,
    FmvSidebarMenu
  },
  mixins: [mainDrawerMixin, sidebarConfigMixin],
  props: {
    sidebarBrand: {
      type: Boolean,
      default: true
    },
    sidebarBrandClass: {
      type: [Array, String, Object],
      default: null
    },
    sidebarSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scrollIntoViewElement: null
    }
  },
  computed: {
    sidebarConfigKey() {
      return this.mainDrawerSidebar
    },
    menu() {
      return this.$store.state.sidebarMenuConfig
    },
    i18nMenu() {
      const menu = {}
      Object.keys(this.menu).map(key => {
        menu[key] = JSON.parse(JSON.stringify(this.menu[key]))
        menu[key].map(item => this.transformI18nMenuItem(item))
      })
      return menu
    },
    isInstructor() {
      return this.$nuxt.$route.path.indexOf('instructor') !== -1
    },
    brandImage() {
      const image =
        this.isInstructor ? 'teacher' : 'student'
      return `/images/illustration/${image}/128/white.svg`
    },
  },
  watch: {
    scrollIntoViewElement: 'scrollIntoView'
  },
  created() {
    this.$root.$on('fmv::sidebar-menu::state', ({targetId, open, opened}) => {
      this.updateSidebarScroll()
      if (opened) {
        this.scrollIntoViewElement = targetId
      }
    })
  },
  methods: {
    updateSidebarScroll() {
      this.$nextTick(() => {
        if (this.$refs.sidebar) {
          this.$refs.sidebar.update()
        }
      })
    },
    scrollIntoView() {
      this.$nextTick(() => {
        const target = document.querySelector(`#${this.scrollIntoViewElement}`)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
          })
        }
      })
    },
    transformI18nMenuItem(item) {
      if (item.label) {
        item.label = this.$t(item.label)
      }
      if (item.route) {
        item.route = this.localePath(item.route)
      }
      if (item.children && item.children.length > 0) {
        item.children.map(child => this.transformI18nMenuItem(child))
      }
      return item
    }
  }
}
</script>
