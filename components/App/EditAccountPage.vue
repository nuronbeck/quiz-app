<template>
  <div 
    :class="containerClass" 
    class="">
    <div class="row">
      <div class="col-lg page__container pb-32pt">
        <page-header
          :title="$t(title)"
          :breadcrumb="breadcrumb"
          :container-class="null" 
          class="mb-32pt" />
        <slot />
      </div>
      <div
        id="page-nav"
        class="col-lg-auto page-nav">
        <fmv-perfect-scrollbar wheel-propagation>
          <div class="page-section pt-lg-32pt">
            <b-nav class="page-nav__menu">
              <li
                v-for="(item, index) in nav"
                :key="`page-nav-${index}`"
                class="nav-item">
                <b-link
                  :to="item.route"
                  class="nav-link"
                  exact
                  v-text="item.label" />
              </li>
            </b-nav>
            <div
              v-if="!noSave"
              class="page-nav__content">
              <b-btn
                variant="accent"
                v-text="$t('Save Changes')" />
            </div>
          </div>
        </fmv-perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-nav {
  width: 220px;
  padding: 0;
}
.page-nav::before {
  left: 0;
}
</style>

<style>
.form-group.row-align-items-center .form-row {
  align-items: center;
}
</style>

<script>
import {FmvPerfectScrollbar} from 'fmv-layout'

export default {
  components: {
    FmvPerfectScrollbar
  },
  props: {
    title: {
      type: String,
      default: null
    },
    nav: {
      type: Array,
      required: true
    },
    noSave: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    layoutConfig() {
      return this.$store.state.layoutConfig[this.$root.layoutName]
    },
    containerClass() {
      return this.layoutConfig.containerClass
    },
    breadcrumb() {
      return [
        {
          text: this.$t('Home'),
          to: this.localePath('index')
        },
        {
          text: this.$t('Edit Account'),
          active: true
        }
      ]
    }
  }
}
</script>
