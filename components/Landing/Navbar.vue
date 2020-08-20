<template>
  <b-navbar 
    id="default-navbar"
    :class="navbarClass"
    :type="navbarType"
    variant=" navbar-dark-dodger-blue will-fade-background"
    class="px-0">
    <div 
      :class="navbarContainerClass">

      <!-- Toggle sidebar -->
      <!-- <button
        v-fmv-toggle.default-drawer 
        class="navbar-toggler w-auto mr-16pt d-block rounded-0"
        :class="navbarToggleClass" 
        type="button">
        <md-icon>short_text</md-icon>
      </button> -->

      <!-- Brand -->
      <b-navbar-brand 
        to="/"
        :class="navbarBrandClass">
        <fmv-avatar
          :title="true"
          title-class="bg-primary"
          size="sm"
          no-link
          class="navbar-brand-icon mr-0 mr-lg-8pt">
          <b-img 
            :src="brandImage" 
            class="img-fluid"
            width="40" 
            :alt="$store.state.brand" />
        </fmv-avatar>
        <span 
          class="d-none d-lg-block"
          v-text="$store.state.brand" />
      </b-navbar-brand>

      <b-navbar-nav
        id="default-nav" 
        class="flex justify-content-start">

        <b-nav-item 
          :to="localePath('landing-luma-vue-nuxt')">
          <img 
            src="/images/Vue.js_Logo_2.svg" 
            alt="Vue Nuxt" 
            width="24" 
            class="mr-2">
          <strong>Vue</strong>
        </b-nav-item>

        <b-nav-item 
          :to="localePath('landing-luma-bootstrap-html')">
          <img
            src="/images/logo/bootstrap.svg"
            alt="Bootstrap"
            width="24"
            class="mr-2">
          <strong>Bootstrap</strong>
        </b-nav-item>

        <b-nav-item-dropdown
          v-if="false">
          <template slot="button-content">
            <img 
              src="/images/Vue.js_Logo_2.svg" 
              :alt="$store.state.brand" 
              width="40" 
              class="mr-2">
            <span class="d-flex flex-column">
              <strong v-text="$store.state.brand" />
              <small class="mt-n1">Vue Nuxt</small>
            </span>
          </template>

          <b-dropdown-item 
            :to="localePath('account-edit-basic')"
            class="py-2">
            <img 
              src="/images/Vue.js_Logo_2.svg" 
              alt="Vue Nuxt" 
              width="24" 
              class="mr-2">
            <strong>Luma Vue Nuxt</strong>
          </b-dropdown-item>

          <b-dropdown-item 
            :to="localePath('account-edit-basic')"
            class="py-2">
            <img 
              src="/images/logo/bootstrap_body.svg" 
              alt="Bootstrap" 
              width="24" 
              class="mr-2">
            <strong>Luma HTML Bootstrap</strong>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      
      <!-- Menu -->
      <b-navbar-nav
        v-if="docsURL || buyURL" 
        class="ml-auto mr-0">

        <template>
          <b-nav-item
            v-if="docsURL" 
            v-b-tooltip.hover.bottom="{ title: $t(`${docsURL.title} Documentation`) }" 
            :href="docsURL.href"
            target="_blank">
            <md-icon>help_outline</md-icon>
          </b-nav-item>
          <li
            v-if="buyURL" 
            class="nav-item">
            <b-btn
              v-b-tooltip.hover.bottom="{ title: $t(buyURL.title) }" 
              :href="buyURL.href" 
              target="_blank"
              :variant="ctaClass">
              {{ $t('Buy') }} <span class="d-none d-sm-inline-block ml-4pt">{{ $t('Now') }}</span>
            </b-btn>
          </li>
        </template>

      </b-navbar-nav>
      <!-- // END Menu -->

    </div>
  </b-navbar>
</template>

<script>
  import navbarConfigMixin from '~/mixins/navbar-config'
  import layoutConfigMixin from '~/mixins/layout-config'

  export default {
    mixins: [
      navbarConfigMixin,
      layoutConfigMixin
    ],
    props: {
      guest: {
        type: Boolean
      },
      navbarClass: {
        type: String,
        default: ''
      },
      navbarType: {
        type: String,
        default: 'dark'
      },
      navbarToggleClass: {
        type: String,
        default: null
      },
      navbarBrandClass: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        buyURL: null,
        docsURL: null
      }
    },
    computed: {
      ctaClass() {
        return this.navbarType === 'dark' ? 'outline-white' : 'outline-dark'
      },
      brandImage() {
        const color = 'white'
        return `/images/illustration/student/128/white.svg`
      },
      navbarConfigKey() {
        return this.$store.getters.settings.mainNavbar.navbar
      }
    },
    created() {
      this.$root.$on('luma::setBuyURL', buyURL => this.buyURL = buyURL)
      this.$root.$on('luma::setDocsURL', docsURL => this.docsURL = docsURL)
    }
  }
</script>
