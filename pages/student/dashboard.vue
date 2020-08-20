<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">
      <page-separator>{{ $t('Overview') }}</page-separator>

      <div class="row mb-lg-8pt">
        <div class="col-lg-6">
          <student-dashboard-topic-iq-chart />
        </div>
        <div class="col-lg-6">
          <student-dashboard-experience-iq-chart />
          <student-achievements-carousel />
        </div>
      </div>

      <div class="row mb-lg-16pt">
        <div class="col-lg-6 mb-8pt mb-sm-0">
          <page-separator>{{ $t('Learning Paths') }}</page-separator>
          <account-path-card
            v-for="item in paths"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :favorite="item.favorite" />
        </div>
        <div class="col-lg-6">
          <page-separator>{{ $t('Courses') }}</page-separator>
          <courses-carousel
            col-class="col-sm-6"
            :account="true" />
        </div>
      </div>

      <student-dashboard-discussions />
    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import StudentDashboardTopicIqChart from '~/components/App/Student/Dashboard/TopicIqChart'
import StudentDashboardExperienceIqChart from '~/components/App/Student/Dashboard/ExperienceIqChart'
import StudentDashboardDiscussions from '~/components/App/Student/Dashboard/Discussions'
import StudentAchievementsCarousel from '~/components/App/Student/Dashboard/AchievementsCarousel'

import AccountPathCard from '~/components/App/AccountPathCard'
import CoursesCarousel from '~/components/App/CoursesCarousel'

export default {
  name: 'StudentDashboard',
  components: {
    StudentDashboardTopicIqChart,
    StudentDashboardExperienceIqChart,
    StudentDashboardDiscussions,
    StudentAchievementsCarousel,

    AccountPathCard,
    CoursesCarousel,
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Dashboard'),
      paths: [{
        title: 'Angular',
        image: 'angular'
      }, {
        title: 'Swift', 
        image: 'swift', 
        favorite: true
      }, {
        title: 'React Native', 
        image: 'react', 
        position: 'left'
      }]
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Dashboard')
    }
  }
}
</script>
