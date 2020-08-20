<script>
import Chart from 'chart.js'
import { settings } from '~/utils/chart-settings'
import objectAssignDeep from 'object-assign-deep'

const globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor:
    'dark' == settings.charts.colorScheme
      ? settings.colors.gray[700]
      : settings.colors.gray[600],
  defaultFontColor:
    'dark' == settings.charts.colorScheme
      ? settings.colors.gray[700]
      : settings.colors.gray[600],
  defaultFontFamily: settings.fonts.base,
  defaultFontSize: 13,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[500]
    },
    line: {
      tension: 0.4,
      borderWidth: 3,
      borderColor: settings.colors.primary[500],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: 'rounded'
    },
    rectangle: {
      backgroundColor: settings.colors.primary[500]
    },
    arc: {
      backgroundColor: settings.colors.primary[500],
      borderColor:
        'dark' == settings.charts.colorScheme
          ? settings.colors.gray[800]
          : settings.colors.white,
      borderWidth: 4
    }
  },
  tooltips: {
    enabled: !1,
    mode: 'index',
    intersect: !1,
    custom: function(r) {
      /*eslint-disable*/
      var a = $('#chart-tooltip')
      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $('body').append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function(a) {
                return a.lines
              }),
              n = ''
          n += '<div class="arrow"></div>', e.forEach(function(a) {
              n += '<h3 class="popover-header text-center">' + a + "</h3>"
          }), l.forEach(function(a, e) {
              var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                  o = 1 < l.length ? "justify-content-left" : "justify-content-center";
              n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>"
          }), a.html(n)
        }
        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
          
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        })

      } else a.css("display", "none")
    },
    callbacks: {
      label: function(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>"
      }
    }
  }
}

Chart.scaleService.updateScaleDefaults("linear", {
  gridLines: {
    borderDash: [2],
    borderDashOffset: [2],
    color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
    drawBorder: !1,
    drawTicks: !1,
    lineWidth: 0,
    zeroLineWidth: 0,
    zeroLineColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
    zeroLineBorderDash: [2],
    zeroLineBorderDashOffset: [2]
  },
  ticks: {
    beginAtZero: !0,
    padding: 10,
    callback: function(a) {
      if (!(a % 10)) return a
    }
  }
})

Chart.scaleService.updateScaleDefaults("category", {
  gridLines: {
    drawBorder: !1,
    drawOnChartArea: !1,
    drawTicks: !1
  },
  ticks: {
    padding: 20
  },
  maxBarThickness: 10
})

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    }
  },
  computed: {
    localOptions() {
      return null
    },
    prefixAndSuffixOptions() {
      const prefix = this.prefix || ''
      const suffix = this.suffix || ''
      const isDoughnut = this.isDoughnut
      const isRadar = this.isRadar

      let yAxes = isDoughnut || isRadar
        ? []
        : [
            {
              ticks: {
                callback: function(a) {
                  if (!(a % 10)) return `${prefix}${a}${suffix}`
                }
              }
            }
          ]

      return {
        scales: {
          yAxes
        },
        tooltips: {
          callbacks: {
            label: function(a, e) {
              const label = e.datasets[a.datasetIndex].label || ''
              const value = isDoughnut ? e.datasets[0].data[a.index] : a.yLabel

              /*eslint-disable*/
              if (e.datasets.length) {
                return `
                  <span class="popover-body-label mr-auto">${label}</span>
                  <span class="popover-body-value">${prefix}${value}${suffix}</span>
                `
              }
            }
          }
        }
      }
    },
    chartOptions() {
      return objectAssignDeep(
        {},
        globalSettings,
        this.prefixAndSuffixOptions,
        this.localOptions,
        this.options
      )
    }
  },
  mounted() {
    this.renderChart(this.data, this.chartOptions)
  }
}
</script>