export default {
  data() {
    return {
      nav: [
        {
          label: this.$t('Basic Information'),
          route: this.localePath('account-edit-basic')
        },
        {
          label: this.$t('Profile & Privacy'),
          route: this.localePath('account-edit-profile')
        }
      ]
    }
  }
}
