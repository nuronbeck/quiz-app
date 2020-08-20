<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <div class="row card-group-row">
        <div
          v-for="item in cards"
          :key="item.id" 
          class="card-group-row__col col-md-6">
          <edit-quiz-card 
            :item="item" />
        </div>
      </div>

      <pager 
        class="mb-32pt" />

      <edit-quizzes-list />

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import EditQuizCard from '~/components/App/Instructor/EditQuizCard'
import EditQuizzesList from '~/components/App/Instructor/EditQuizzesList'

export default {
  components: {
    EditQuizCard,
    EditQuizzesList
  },
  extends: Page,
  data() {
    return {
      title: this.$t('Manage Quizzes'),
      cards: [{
        course: 'Angular Routing In-Depth',
        image: '/images/paths/angular_routing_200x168.png',
        date: {
          type: 'min',
          value: 12
        }
      }, {
        course: 'Angular Unit Testing',
        image: '/images/paths/angular_testing_200x168.png',
        date: {
          type: 'day',
          value: 2
        }
      }, {
        course: 'Introduction to TypeScript',
        image: '/images/paths/typescript_200x168.png',
        date: {
          type: 'day',
          value: 3
        }
      }, {
        course: 'Angular Fundamentals',
        image: '/images/paths/angular_200x168.png',
        date: {
          type: 'day',
          value: 3
        }
      }],
      list: [{
        course: 'Newsletter Design', 
        image: '/images/paths/mailchimp_200x168.png'
      }, {
        course: 'Adobe XD', 
        image: '/images/paths/xd_200x168.png'
      }, {
        course: 'inVision App', 
        image: '/images/paths/invision_200x168.png'
      }, {
        course: 'Craft by inVision', 
        image: '/images/paths/craft_200x168.png'
      }]
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Manage Quizzes')
    }
  }
}
</script>
