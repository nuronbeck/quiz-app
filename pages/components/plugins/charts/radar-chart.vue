<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <form-card
        id="usage"
        title="Radar"
        description="A radar chart provides a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets."
        no-body>

        <radar-chart
          :data="data"
          suffix=" points"
          class="chart" />

        <template slot="before-footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <hljs
                :code="code.template"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <hljs
                :code="code.script"
                class="bg-dark" />
            </b-tab>
          </b-tabs>
        </template>
      </form-card>

    </docs-page>
  </div>
</template>

<script>
import Page from '~/components/App/ComponentsPage'
import { settings } from '~/utils/chart-settings'

export default {
  extends: Page,
  async asyncData() {
    return {
      title: 'Radar Chart'
    }
  },
  data() {
    return {
      meta: {
        component: 'radarChart',
        nav: ['usage']
      },
      data: {
        labels: [
          'JavaScript',
          'HTML',
          'Flinto',
          'Vue.js',
          'Sketch',
          'Priciple',
          'CSS',
          'Angular'
        ],
        datasets: [
          {
            data: [30, 35, 33, 32, 31, 30, 28, 36],
            pointHoverBorderColor: settings.colors.success[400],
            pointHoverBackgroundColor: settings.colors.white,
            borderJoinStyle: 'bevel',
            lineTension: 0.1
          }
        ]
      },
      code: {
        template: `
          <template>
            <radar-chart
              :data="data"
              :options="options"
              suffix=" points"
              class="chart" />
          </template>
        `,
        script: `
          <script>
            import RadarChart from '~/components/Charts/Radar.vue'
            import { settings } from '~/utils/chart-settings'

            export default {
              components: {
                RadarChart
              },
              data() {
                return {
                  data: {
                    labels: [
                      'JavaScript',
                      'HTML',
                      'Flinto',
                      'Vue.js',
                      'Sketch',
                      'Priciple',
                      'CSS',
                      'Angular'
                    ],
                    datasets: [
                      {
                        data: [30, 35, 33, 32, 31, 30, 28, 36],
                        pointHoverBorderColor: settings.colors.success[400],
                        pointHoverBackgroundColor: settings.colors.white,
                        borderJoinStyle: 'bevel',
                        lineTension: 0.1
                      }
                    ]
                  }
                }
              }
            }
          <\/script>
        `
      }
    }
  }
}
</script>
