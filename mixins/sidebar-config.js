export default {
  computed: {
    sidebarConfig() {
      if (this.sidebarConfigKey) {
        return this.$store.state.sidebarConfig[this.sidebarConfigKey]
      }
    }
  },
  methods: {
    sidebarConfigValue(key) {
      if (this.sidebarConfig) {
        return this.sidebarConfig[key]
      }
    }
  }
}
