export default {
  computed: {
    mainDrawerAlign() {
      try {
        return this.$store.getters.settings[`${this.$root.layoutName}::mainDrawer`].align
      } catch(e) {}
    },
    mainDrawerSidebar() {
      try {
        return this.$store.getters.settings[`${this.$root.layoutName}::mainDrawer`].sidebar
      } catch(e) {}
    }
  }
}
