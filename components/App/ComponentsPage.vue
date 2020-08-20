<script>
import Page from '~/components/App/Page'

export default {
  extends: Page,
  computed: {
    breadcrumb() {
      return [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Components',
          to: '/'
        },
        {
          text: this.title,
          active: true
        }
      ]
    }
  }
}
</script>
