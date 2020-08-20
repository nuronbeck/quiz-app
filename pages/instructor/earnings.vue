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
        :title="$t('Overview')" />

      <instructor-earnings
        class="mb-lg-32pt" />

      <page-separator
        :title="$t('Transactions')" />
      
      <b-card no-body>
        <transactions-table
          earnings />
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
  import InstructorEarnings from '~/components/App/Instructor/Earnings'
  import TransactionsTable from '~/components/App/TransactionsTable'

  export default {
    components: {
      InstructorEarnings,
      TransactionsTable
    },
    extends: Page,
    data() {
      return {
        title: this.$t('Earnings')
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Earnings')
      }
    }
  }
</script>
