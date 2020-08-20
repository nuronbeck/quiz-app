export default {
  computed: {
    localeConfig() {
      return this.$i18n.locales.find(
        locale => locale.code === this.$i18n.locale
      )
    }
  }
}
