<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <form-card
        id="usage"
        title="Line"
        description="A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets."
        no-body>

        <line-chart
          :data="data"
          prefix="$"
          suffix="k"
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

export default {
  extends: Page,
  async asyncData() {
    return {
      title: 'Line Chart'
    }
  },
  data() {
    return {
      meta: {
        component: 'lineChart',
        nav: ['usage']
      },
      data: {
        // eslint-disable-next-line
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Performance',
            data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
          }
        ]
      },
      code: {
        template: `
          <template>
            <line-chart
              :data="data"
              :options="options"
              prefix="$"
              suffix="k"
              class="chart" />
          </template>
        `,
        script: `
          <script>
            import LineChart from '~/components/Charts/Line.vue'

            export default {
              components: {
                LineChart
              },
              data() {
                return {
                  data: {
                    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    datasets: [{
                      label: 'Performance',
                      data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
                    }]
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
