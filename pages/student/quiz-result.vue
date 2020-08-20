<template>
  <div>
    <back-to-course-navbar />

    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="py-64pt text-center text-sm-left">
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <p 
              class="lead text-white-50 measure-lead-max mb-0"
              v-text="$t('date', { date: $d(submitted_at, 'short', localeIso) })" />
            <h1 
              class="text-white mb-24pt"
              v-text="$t('score', { score: 350 })" />
            <b-btn 
              :to="localePath('student-take-quiz')"
              variant="outline-white"
              v-text="$t('Restart Quiz')" />
          </div>
        </div>
      </div>
    </div>

    <quiz-result-navbar />

    <div :class="containerClass">
      <quiz-result-details />
    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "score": "Scorul tău: {score}",
    "Restart Quiz": "Resetare Test",
    "date": "Finalizat la {date}"
  }
</i18n>

<i18n locale="en">
  {
    "score": "Your Score: {score}",
    "date": "Submited on {date}"
  }
</i18n>

<script>
  import { locales, dateTimeFormats } from '~/config/i18n'

  import Page from '~/components/App/Page'
  import BackToCourseNavbar from '~/components/App/Course/BackToCourseNavbar'
  import QuizResultNavbar from '~/components/App/Course/QuizResultNavbar'
  import QuizResultDetails from '~/components/App/Course/QuizResultDetails'

  export default {
    i18n: {
      dateTimeFormats
    },
    components: {
      BackToCourseNavbar,
      QuizResultNavbar,
      QuizResultDetails
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Quiz Result'),
        locales,
        submitted_at: new Date()
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      },
      localeIso() {
        return this.locales.find(locale => locale.code === this.$i18n.locale).iso
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Quiz Result')
      }
    }
  }
</script>
