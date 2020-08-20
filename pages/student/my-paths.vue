<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">
        
      <page-separator>Featured Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in featured_paths"
          :key="item.id"
          class="col-sm-4 card-group-row__col">
          <account-path-card
            card-class="card-group-row__card"
            :title="item.title"
            :description="item.description"
            :image="item.image"
            :favorite="item.favorite"
            :account="item.account"
            :cta="false"
            :details="true" />
        </div>
      </div>

      <div class="mb-32pt">
        <pager />
      </div>

      <page-separator>Development Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in development_paths"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card"
            :title="item.title" 
            :image="item.image"
            :open="item.open"
            :favorite="item.favorite"
            :cta="false" />
        </div>
      </div>

      <div class="mb-32pt">
        <pager />
      </div>

      <page-separator>Design Paths</page-separator>

      <div class="row card-group-row mb-lg-8pt">
        <div
          v-for="item in design_paths"
          :key="item.id" 
          class="col-sm-4 card-group-row__col">
          <account-path-card
            class="card-group-row__card"
            :title="item.title" 
            :image="item.image"
            :open="item.open"
            :favorite="item.favorite"
            :cta="false" />
        </div>
      </div>

      <pager />

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import Pager from '~/components/App/Pager'
import AccountPathCard from '~/components/App/AccountPathCard'

export default {
  components: {
    Pager,
    AccountPathCard
  },
  extends: Page,
  data () {
    return {
      title: this.$t('My Paths'),
      featured_paths: [{
        title: 'Angular',
        image: 'angular',
        description: 'Angular is a platform for building mobile and desktop web applications.',
        favorite: true,
        account: true
      }, {
        title: 'Swift',
        image: 'swift',
        description: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.'
      }, {
        title: 'WordPress',
        image: 'wordpress',
        description: 'WordPress is open source software you can use to create a beautiful website, blog, or app.'
      }],
      development_paths: [{
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
      design_paths: [{
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
  async asyncData({ app }) {
    return {
      title: app.i18n.t('My Paths')
    }
  }
}
</script>
