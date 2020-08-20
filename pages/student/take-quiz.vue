<template>
  <div>
    <back-to-course-navbar />

    <div class="bg-primary pb-lg-64pt py-32pt">
      <div :class="containerClass">
        <nav class="course-nav">

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction to TypeScript' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Comparing Angular to AngularJS' }"
            :to="localePath('student-take-lesson')">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Quiz: Getting Started with Angular' }"
            :to="localePath('student-take-quiz')">
            <md-icon v-text="'account_circle'" />
          </b-link>
        </nav>
        
        <div class="d-flex flex-wrap align-items-end justify-content-end mb-16pt">
          <h1 class="text-white flex m-0">Question 1 of 5</h1>
          <p class="h1 text-white-50 font-weight-light m-0">00:14</p>
        </div>

        <p class="hero__lead measure-hero-lead text-white-50 mb-0">An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>
      </div>
    </div>

    <take-quiz-navbar />

    <div 
      :class="containerClass" 
      class="page-section">

      <take-quiz-form />

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import BackToCourseNavbar from '~/components/App/Course/BackToCourseNavbar'
import TakeQuizNavbar from '~/components/App/Course/TakeQuizNavbar'
import TakeQuizForm from '~/components/App/Course/TakeQuizForm'

export default {
  components: {
    BackToCourseNavbar,
    TakeQuizNavbar,
    TakeQuizForm
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Take Quiz')
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Take Quiz')
    }
  }
}
</script>
