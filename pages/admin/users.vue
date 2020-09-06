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
        :title="$t('Users')" />
      
      <b-card no-body>
        <all-users-table />
      </b-card>

    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Overview": "Sumar"
  }
</i18n>

<script>
  import Page from '~/components/App/Page'
  import AllUsersTable from '~/components/App/AllUsersTable'

  export default {
    middleware: [
        'auth',
        'admin'
    ],
    components: {
      AllUsersTable
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Users')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Users')
      }
    }
  }
</script>
