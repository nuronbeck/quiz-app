<script>
import chartMixin from '~/mixins/chart'
import { settings } from '~/utils/chart-settings'
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [chartMixin],
  data() {
    return {
      isDoughnut: true
    }
  },
  computed: {
    localOptions() {
      return {
        cutoutPercentage: 83,
        tooltips: {
          callbacks: {
            title: function(a, e) {
              return e.labels[a[0].index]
            }
          }
        },
        legendCallback: function(a) {
          var o = a.data,
            r = ''
          o.labels.forEach(function(a, e) {
            r += `
              <span class="chart-legend-item">
                <i class="chart-legend-indicator" style="background-color: ${
                  o.datasets[0].backgroundColor[e]
                }"></i> ${a}
              </span>
            `
          })
          return r
        }
      }
    }
  }
}
</script>
