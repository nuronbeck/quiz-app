<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">

      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle" 
        label="paths" />

      <page-separator>{{ $t('Courses catalogs') }}</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in categories"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card" 
            :title="item.name" 
            :image="false ? `${$store.getters['settings/appURI']}/${item.file.path}` : '/images/paths/redis_40x40@2x.png'"
            :open="item.open"
            :favorite="item.favorite"
            :account="false"
            :cta="false" />
        </div>
      </div>

      <pager class="mb-32pt" /> 

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import ResultsHeading from '~/components/App/ResultsHeading'
import AccountPathCard from '~/components/App/AccountPathCard'
import Pager from '~/components/App/Pager'

import LibraryDrawer from '~/components/App/LibraryDrawer'

import { mapGetters } from 'vuex'

export default {
  components: {
    ResultsHeading,
    AccountPathCard,
    Pager
  },
  extends: Page,
  computed: {
    ...mapGetters({
        categories: 'categories/categories'
    }),
    guest() {
      return true
    },
    subLayout() {
      return this.$root.layoutName === 'fixed'
    },
    subLayoutDrawer() {
      return this.$root.layoutName === 'fixed' 
        ? LibrarySidebar
        : LibraryDrawer
    },
    subLayoutDrawerId() {
      return 'library-drawer'
    },
    resultsHeadingSidebarToggle() {
      return this.$root.layoutName === 'fixed' ? 'mobile' : true
    }
  },
  data () {
    return {
      title: this.$t('Courses catalogs'),
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Courses catalogs')
    }
  }
}
</script>
