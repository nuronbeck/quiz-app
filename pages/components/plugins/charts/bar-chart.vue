<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <form-card
        id="usage"
        title="Bar"
        description="A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."
        no-body>

        <bar-chart
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
      title: 'Bar Chart'
    }
  },
  data() {
    return {
      meta: {
        component: 'barChart',
        nav: ['usage']
      },
      data: {
        // eslint-disable-next-line
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
            barThickness: 10
          }
        ]
      },
      code: {
        template: `
          <template>
            <bar-chart
              :data="data"
              :options="options"
              prefix="$"
              suffix="k"
              class="chart" />
          </template>
        `,
        script: `
          <script>
            import BarChart from '~/components/Charts/Bar.vue'

            export default {
              components: {
                BarChart
              },
              data() {
                return {
                  data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                      {
                        label: 'Sales',
                        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                        barThickness: 10
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
