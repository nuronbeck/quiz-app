<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <form-card
        id="usage"
        title="Doughnut"
        description="Excellent at showing the relational proportions between data."
        no-body>

        <doughnut-chart
          :data="data"
          suffix="%"
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
      title: 'Doughnut Chart'
    }
  },
  data() {
    return {
      meta: {
        component: 'doughnutChart',
        nav: ['usage']
      },
      data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [
          {
            data: [60, 25, 15],
            backgroundColor: [
              settings.colors.primary[500],
              settings.colors.success[300],
              settings.colors.success[100]
            ],
            hoverBorderColor:
              'dark' == settings.charts.colorScheme
                ? settings.colors.gray[800]
                : settings.colors.white
          }
        ]
      },
      code: {
        template: `
          <template>
            <doughnut-chart
              :data="data"
              :options="options"
              suffix="%"
              class="chart" />
          </template>
        `,
        script: `
          <script>
            import DoughnutChart from '~/components/Charts/Doughnut.vue'

            export default {
              components: {
                DoughnutChart
              },
              data() {
                return {
                  data: {
                    labels: ['Desktop', 'Tablet', 'Mobile'],
                    datasets: [{
                      data: [60, 25, 15],
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
