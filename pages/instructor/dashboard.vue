<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section border-bottom-2">

      <div class="row">
        <div class="col-lg-4">
          <div class="card border-1 border-left-3 border-left-accent text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">&dollar;1,569.00</h4>
              <div v-text="$t('Earnings this month')" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">&dollar;3,917.80</h4>
              <div v-text="$t('Account Balance')" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">&dollar;10,211.50</h4>
              <div v-text="$t('Total Sales')" />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div 
      :class="containerClass" 
      class="page-section">

      <div class="row">
        <div class="col-lg-6">

          <instructor-dashboard-earnings />
          <instructor-dashboard-transactions />

        </div>
        <div class="col-lg-6">

          <instructor-dashboard-sales />
          <instructor-dashboard-comments />

        </div>
      </div>

    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Earnings this month": "Încasări luna asta",
    "Account Balance": "Soldul contului",
    "Total Sales": "Vânzări Totale"
  }
</i18n>

<script>
import Page from '~/components/App/Page'
import InstructorDashboardEarnings from '~/components/App/Instructor/Dashboard/Earnings'
import InstructorDashboardTransactions from '~/components/App/Instructor/Dashboard/Transactions'
import InstructorDashboardSales from '~/components/App/Instructor/Dashboard/Sales'
import InstructorDashboardComments from '~/components/App/Instructor/Dashboard/Comments'

export default {
  name: 'InstructorDashboard',
  components: {
    InstructorDashboardEarnings,
    InstructorDashboardTransactions,
    InstructorDashboardSales,
    InstructorDashboardComments
  },
  extends: Page,
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Dashboard')
    }
  }
}
</script>
