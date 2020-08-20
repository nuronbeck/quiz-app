<template>
  <card
    :header-btn="true" 
    :title="$t('Transactions')"
    :subtitle="$t('Latest Transactions')"
    :header-btn-route="localePath('instructor-statement')"
    no-body>
    <md-icon slot="header-btn-title">receipt</md-icon>

    <transactions-table />
  </card>
</template>

<script>
import TransactionsTable from '~/components/App/TransactionsTable'

export default {
  components: {
    TransactionsTable
  }
}
</script>
