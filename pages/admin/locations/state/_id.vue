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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    middleware: [
      'auth',
      'admin'
    ],
    components: {
      StateRegionsTable
    },
    extends: Page,
    validate({ params }) {
      return /^\d+$/.test(params.id)
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
