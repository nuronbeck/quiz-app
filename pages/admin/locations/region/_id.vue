<template>
  <div class="mb-5 pb-5">
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <div class="d-flex justify-content-start pb-3">
        <button class="btn btn-secondary" @click="$router.push(localePath('admin-locations'))">
          <md-icon>arrow_back</md-icon>
          {{ $t('Back to states') }}
        </button>
      </div>

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
    
  async validate({ params, store }) {
    if(/^\d+$/.test(params.id)){
      await store.dispatch('admin/loadDistricts', params.id)
      return true
    } else {
      return false
    }
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
