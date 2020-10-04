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
        :title="$t('State regions')" />

      <b-card no-body>
        <state-regions-table />
      </b-card>

    </div>
  </div>
</template>

<script>
  import Page from '~/components/App/Page'
  import StateRegionsTable from '~/components/App/Admin/StateRegionsTable'
  import { mapActions } from 'vuex'

  export default {
    middleware: [
      'auth',
      'admin'
    ],
    components: {
      StateRegionsTable
    },
    extends: Page,
    async validate({ params, store }) {
      if(/^\d+$/.test(params.id)){
        await store.dispatch('admin/loadRegions', params.id)
        return true
      } else {
        return false
      }
    },
    data() {
      return {
        title: this.$t('State regions')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('State regions')
      }
    }
  }
</script>
