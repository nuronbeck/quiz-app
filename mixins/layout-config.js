export default {
  props: {
    customContainerClass: {
      type: String,
      default: null
    },
    customNavbarContainerClass: {
      type: String,
      default: null
    }
  },
  computed: {
    layoutConfig() {
      return this.$store.state.layoutConfig[this.$root.layoutName] || this.$store.state.layoutConfig.fixed
    },
    containerClass() {
      return this.customContainerClass || this.layoutConfig.containerClass
    },
    navbarContainerClass() {
      const classes = { 'p-0': this.$root.layoutName === 'fixed' }
      
      if (this.customNavbarContainerClass) {
        classes[this.customNavbarContainerClass] = true
        return classes
      }

      let containerClass = this.layoutConfig.navbarContainerClass
      if (!containerClass) {
        containerClass = this.layoutConfig.containerClass
      }

      classes[containerClass] = true
      return classes
    }
  }
}