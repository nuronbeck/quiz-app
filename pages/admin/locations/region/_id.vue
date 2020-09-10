<template>
  <div class="mb-5 pb-5">
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <page-separator
        :title="$t('Region cities')" />
      
      <b-card no-body>
        <region-cities-table />
      </b-card>

    </div>
  </div>
</template>

<script>
  import Page from '~/components/App/Page'
  import RegionCitiesTable from '~/components/App/Admin/RegionCitiesTable'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    middleware: [
      'auth',
      'admin'
    ],
    components: {
      RegionCitiesTable
    },
    extends: Page,
    validate({ params, store }) {
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
        title: this.$t('Region cities')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Region cities')
      }
    }
  }
</script>
