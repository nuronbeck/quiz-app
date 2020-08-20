<template>
  <div>
    <back-to-path-navbar />
    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="py-64pt text-center text-sm-left">
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <h1 
              class="text-white mb-0"
              v-text="$t('Skill Assessment')" />
            <p 
              class="lead text-white-50 measure-lead-max"
              v-text="$t('Measure your skill to find out where to start.')" />
          </div>
        </div>
        <skill-assessment-navbar />
      </div>
    </div>

    <div :class="containerClass">
      <skill-assessment-form />
    </div>

  </div>
</template>

<i18n locale="ro">
  {
    "Skill Assessment": "Evaluare Calificare",
    "Measure your skill to find out where to start.": "Măsoară-ți abilitățile pentru a afla de unde să începi."
  }
</i18n>

<script>
  import Page from '~/components/App/Page'
  import BackToPathNavbar from '~/components/App/Course/BackToPathNavbar'
  import SkillAssessmentNavbar from '~/components/App/Course/SkillAssessmentNavbar'
  import SkillAssessmentForm from '~/components/App/Course/SkillAssessmentForm'

  export default {
    components: {
      BackToPathNavbar,
      SkillAssessmentNavbar,
      SkillAssessmentForm
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Skill Assessment')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Skill Assessment')
      }
    }
  }
</script>
