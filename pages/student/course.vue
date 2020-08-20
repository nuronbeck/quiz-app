<template>
  <div>
    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="hero py-64pt text-center text-sm-left">
          <div :class="containerClass">
            <h1 
              class="text-white"
              v-text="hero_title" />
            <p 
              class="lead text-white-50 measure-hero-lead"
              v-text="description" />
            <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
              <b-btn
                :to="localePath('student-lesson')"
                variant="outline-white"
                class="mb-16pt mb-sm-0 mr-sm-16pt">
                {{ $t('Watch trailer') }} 
                <md-icon
                  right
                  v-text="'play_circle_outline'" />
              </b-btn>
              <b-btn
                :to="localePath('pricing')"
                variant="white"
                v-text="$t('Start your free trial')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <course-navbar
      :custom-navbar-container-class="containerClass" />

    <div class="page-section border-bottom-2">
      <div :class="containerClass">

        <page-separator 
          :title="$t('Table of Contents')" />

        <div class="row mb-0">
          <div class="col-lg-7">
            <course-toc 
              boxed />
          </div>
          <div class="col-lg-5 justify-content-center">
            <unlock-library-card 
              label="Library" />
          </div>
        </div>
      </div>
    </div>

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-description />
      </div>
    </div>

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-author />
      </div>
    </div>

    <page-feedback
      class="border-bottom-2" />

    <div class="page-section bg-alt border-bottom-2">
      <div :class="containerClass">
        <course-ratings />
      </div>
    </div>

    <div class="page-section">
      <div :class="containerClass">
        <page-heading
          element="h4"
          :custom-class="null"
          v-text="'Top Development Courses'" />

        <courses-carousel
          :account="false" />
      </div>
    </div>

  </div>
</template>

<i18n locale="ro">
  {
    "Watch trailer": "Urmărește trailer",
    "Start your free trial": "Începe gratuit",
    "Table of Contents": "Cuprins"
  }
</i18n>

<script>
import Page from '~/components/App/Page'
import CourseNavbar from '~/components/App/Course/CourseNavbar'
import UnlockLibraryCard from '~/components/App/UnlockLibraryCard'
import CourseToc from '~/components/App/Course/CourseToc'
import CourseDescription from '~/components/App/Course/CourseDescription'
import CourseAuthor from '~/components/App/Course/CourseAuthor'
import CourseRatings from '~/components/App/Course/CourseRatings'
import CoursesCarousel from '~/components/App/CoursesCarousel'
import PageFeedback from '~/components/App/PageFeedback'

export default {
  components: {
    CourseNavbar,
    UnlockLibraryCard,
    CourseToc,
    CourseDescription,
    CourseAuthor,
    CourseRatings,
    CoursesCarousel,
    PageFeedback
  },
  extends: Page,
  data () {
    return {
      title: this.$t('View Course'),
      hero_title: 'Angular Fundamentals',
      description: 'It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.'
    }
  },
  computed: {
    guest() {
      return true
    },
    headerClass() {
      return 'mb-0'
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('View Course')
    }
  }
}
</script>
