<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <page-separator
        :title="$t('Transactions')" />
      
      <b-card no-body>
        <transactions-table />
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
  import TransactionsTable from '~/components/App/TransactionsTable'

  export default {
    middleware: [
        'auth',
        'admin'
    ],
    components: {
      TransactionsTable
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Statement')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Statement')
      }
    }
  }
</script>
