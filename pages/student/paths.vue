<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">

      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle" 
        label="paths" />

      <page-separator>Development Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in development"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card" 
            :title="item.title"
            :description="item.description" 
            :image="item.image"
            :favorite="item.favorite"
            :open="item.open"
            :account="item.account"
            :cta="false" />
        </div>
      </div>

      <pager class="mb-32pt" />

      <page-separator>Design Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in design"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card" 
            :title="item.title"
            :description="item.description" 
            :image="item.image"
            :favorite="item.favorite"
            :account="item.account"
            :cta="false" />
        </div>
      </div>

      <pager />

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import ResultsHeading from '~/components/App/ResultsHeading'
import AccountPathCard from '~/components/App/AccountPathCard'
import Pager from '~/components/App/Pager'

import LibraryDrawer from '~/components/App/LibraryDrawer'
import LibrarySidebar from '~/components/App/LibrarySidebar'

export default {
  components: {
    ResultsHeading,
    AccountPathCard,
    Pager
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Paths'),
      development: [{
        title: 'React Native',
        image: 'react'
      }, {
        title: 'Dev Ops',
        image: 'devops'
      }, {
        title: 'Redis',
        image: 'redis'
      }, {
        title: 'MailChimp',
        image: 'mailchimp',
        open: true,
        favorite: true
      }, {
        title: 'Angular',
        image: 'angular'
      }, {
        title: 'Swift',
        image: 'swift'
      }, {
        title: 'WordPress',
        image: 'wordpress'
      }],
      design: [{
        title: 'Sketch',
        image: 'sketch'
      }, {
        title: 'Flinto',
        image: 'flinto'
      }, {
        title: 'Photoshop',
        image: 'photoshop'
      }, {
        title: 'Figma',
        image: 'figma'
      }, {
        title: 'Adobe XD',
        image: 'xd'
      }, {
        title: 'inVision App',
        image: 'invision'
      }, {
        title: 'Craft by inVision',
        image: 'craft'
      }]
    }
  },
  computed: {
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
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Paths')
    }
  }
}
</script>
