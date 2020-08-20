export default {
  computed: {
    navbarConfig() {
      if (this.navbarConfigKey) {
        return this.$store.state.navbarConfig[this.navbarConfigKey]
      }
    }
  },
  methods: {
    navbarConfigValue(key) {
      if (this.navbarConfig) {
        return this.navbarConfig[key]
      }
    }
  }
}
