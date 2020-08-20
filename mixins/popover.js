export default {
  data() {
    return {
      popoverContainer: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const isDrawerLayout = document.querySelector('.mdk-drawer-layout__content')
      const isHeaderLayout = document.querySelector('.mdk-header-layout__content')
      // const isSubLayout = document.querySelector('.mdk-drawer-layout__content .mdk-drawer-layout__content')
      // const isHeaderSubLayout = document.querySelector('.mdk-header-layout__content .mdk-drawer-layout__content')

      let container = null
      container = !!isDrawerLayout ? isDrawerLayout.getAttribute('id') : container
      container = !!isHeaderLayout ? isHeaderLayout.getAttribute('id') : container
      // container = !!isSubLayout ? isSubLayout.getAttribute('id') : container
      // container = !!isHeaderSubLayout ? isHeaderSubLayout.getAttribute('id') : container

      this.popoverContainer = container
    })
  }
}