export default {
  data() {
    return {
      subLayout: false,
      subLayoutDrawer: false,
      subLayoutDrawerId: 'sub-layout-drawer',
      subLayoutDrawerAlign: 'end'
    }
  },
  watch: {
    $route: 'updateDocument'
  },
  created() {
    this.$root.$on('luma::subLayout', subLayout => this.subLayout = subLayout)
    this.$root.$on('luma::subLayoutDrawer', subLayoutDrawer => this.subLayoutDrawer = subLayoutDrawer)
    this.$root.$on('luma::subLayoutDrawerId', subLayoutDrawerId => this.subLayoutDrawerId = subLayoutDrawerId)
    this.$root.$on('luma::subLayoutDrawerAlign', subLayoutDrawerAlign => this.subLayoutDrawerAlign = subLayoutDrawerAlign)
  },
  methods: {
    // @TODO: move to mdk-drawer-layout@destroy
    updateDocument() {
      const docElements = [...document.querySelectorAll('html, body')]
      docElements.forEach(el => {
        // fullbleed
        el.style.height = ''
        // has-scrolling-region
        el.style.overflow = ''
        el.style.position = ''
      })
    }
  }
}