<script>
import chartMixin from '~/mixins/chart'
import { settings } from '~/utils/chart-settings'
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mixins: [chartMixin],
  data() {
    return {
      isRadar: true
    }
  },
  computed: {
    localOptions() {
      return {
        elements: {
          point: {
            pointStyle: 'circle',
            radius: 4,
            hoverRadius: 5,
            backgroundColor: settings.colors.white,
            borderColor: settings.colors.primary[500],
            borderWidth: 2
          }
        },
        scale: {
          ticks: {
            display: false,
            beginAtZero: true,
            maxTicksLimit: 4
          },
          gridLines: {
            color: settings.colors.gray[300]
          },
          angleLines: {
            color: settings.colors.gray[300]
          },
          pointLabels: {
            fontSize: 14
          }
        }
      }
    }
  }
}
</script>
