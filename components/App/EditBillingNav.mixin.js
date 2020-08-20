export default {
  data() {
    return {
      nav: [
        {
          label: this.$t('Subscription'),
          route: this.localePath('account-edit-subscription')
        },
        {
          label: this.$t('Upgrade Account'),
          route: this.localePath('account-edit-upgrade')
        },
        {
          label: this.$t('Payment Information'),
          route: this.localePath('account-edit-payment-information')
        },
        {
          label: this.$t('Payment History'),
          route: this.localePath('account-edit-payment-history')
        },
        {
          label: this.$t('Invoice'),
          route: this.localePath('account-invoice')
        }
      ]
    }
  }
}
