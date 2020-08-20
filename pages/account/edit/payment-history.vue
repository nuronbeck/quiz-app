<template>
  <edit-account-page 
    :title="title"
    :nav="nav"
    no-save>
    
    <b-alert
      variant="soft-warning px-12pt"
      show>
      <div class="d-flex align-items-center">
        <div class="flex d-flex align-items-center">
          <b-img 
            src="/images/visa.svg" 
            alt="visa" 
            width="38"
            class="mr-8pt" />
          <span class="text-black-100">
            Please pay your amount due 
            <strong>$25.00 USD</strong>
          </span>
        </div>
        <b-btn 
          :to="localePath('account-edit-payment-information')" 
          variant="dark"
          class="ml-3"
          v-text="$t('Pay Now')" />
      </div>
    </b-alert>

    <b-card no-body>
      <transactions-table />
    </b-card>

  </edit-account-page>
</template>

<script>
import Page from '~/components/App/Page'
import EditAccountPage from '~/components/App/EditAccountPage'
import EditBillingNav from '~/components/App/EditBillingNav.mixin'
import TransactionsTable from '~/components/App/TransactionsTable'

export default {
  components: {
    EditAccountPage,
    TransactionsTable
  },
  extends: Page,
  mixins: [EditBillingNav],
  data() {
    return {
      title: 'Payment History'
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  }
}
</script>
