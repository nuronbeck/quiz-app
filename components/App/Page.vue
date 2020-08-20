<script>
import layoutConfigMixin from '~/mixins/layout-config'
export default {
  mixins: [layoutConfigMixin], 
  layout({ store }) {
    return store.getters.settings.layout.layout
  },
  head() {
    return {
      title: `${this.$t(this.title)} - ${this.$store.state.brand}`
    }
  },
  data() {
    return {
      title: null,
      redirectLayout: true
    }
  },
  computed: {
    breadcrumb() {
      return [
        {
          text: this.$t('Home'),
          to: this.localePath('/')
        },
        {
          text: this.$t(this.title),
          active: true
        }
      ]
    },
    headerClass() {
      return null
    },
    headerEffects() {
      return 'waterfall'
    },
    headerImage() {
      return null
    },
    headerContentClass() {
      return null
    },
    headerCondenses() {
      return false
    },
    headerContentComponent() {
      return null
    },
    headerContentComponentProps() {
      return null
    },
    guest() {
      return false
    },
    subLayout() {
      return false
    },
    subLayoutDrawer() {
      return false
    },
    subLayoutDrawerId() {
      return 'sub-layout-drawer'
    },
    subLayoutDrawerAlign() {
      return 'end'
    }
  },
  created() {
    this.emitOptions()
  },
  methods: {
    emitOptions() {
      const options = [
        'guest',
        'subLayout',
        'subLayoutDrawerId',
        'subLayoutDrawerAlign',
        'subLayoutDrawer',
        'headerClass',
        'headerEffects',
        'headerImage',
        'headerContentClass',
        'headerCondenses',
        'headerContentComponent',
        'headerContentComponentProps'
      ]

      options.map(option => {
        if (this[option] !== undefined) {
          this.$root.$emit(`luma::${option}`, this[option])
        }
      })
    }
  }
}
</script>
