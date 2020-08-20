<template>
  <edit-account-page 
    :title="title"
    :nav="nav"
    no-save>
    <div class="row card-group-row mb-40pt">
      <div class="col-lg-6 col-sm-6 card-group-row__col">
        <pricing-card
          title="Student"
          description="Access to over 1.000 high quality courses. For individuals."
          price="9"
          color="secondary"
          action-color="outline-secondary"
          action="Current plan"
          action-disabled
          icon="person" />
      </div>
      <div class="col-lg-6 col-sm-6 card-group-row__col">
        <pricing-card
          title="Team"
          description="Starts with 3 accounts with more seats available."
          price="19"
          color="accent"
          raised
          icon="group" />
      </div>
    </div>
  </edit-account-page>
</template>

<script>
import Page from '~/components/App/Page'
import EditAccountPage from '~/components/App/EditAccountPage'
import EditBillingNav from '~/components/App/EditBillingNav.mixin'
import PricingCard from '~/components/App/PricingCard'

export default {
  components: {
    EditAccountPage,
    PricingCard
  },
  extends: Page,
  mixins: [EditBillingNav],
  data() {
    return {
      title: 'Upgrade Account'
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  }
}
</script>
