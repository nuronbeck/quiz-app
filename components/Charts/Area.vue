<script>
import chartMixin from '~/mixins/chart'
import { settings } from '~/utils/chart-settings'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [chartMixin],
  computed: {
    localOptions() {
      return {
        elements: {
          line: {
            fill: 'start',
            backgroundColor: settings.charts.colors.area
          }
        }
      }
    }
  }
}
</script>
