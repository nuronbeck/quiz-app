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
        :title="$t('Locations')" />

      <div class="d-flex justify-content-end pb-3">
        <button class="btn btn-primary" @click="$router.push(localePath('admin-locations-add'))">
          <md-icon>add</md-icon>
          {{ $t('Add') }}
        </button>
      </div>
      
      <b-card no-body> 
        <all-states-table />
      </b-card>

    </div>
  </div>
</template>

<script>
  import Page from '~/components/App/Page'
  import AllStatesTable from '~/components/App/Admin/AllStatesTable'

  export default {
    middleware: [
      'auth',
      'admin'
    ],
    components: {
      AllStatesTable
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Locations')
      }
    },
    methods: {

    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Locations')
      }
    }
  }
</script>
