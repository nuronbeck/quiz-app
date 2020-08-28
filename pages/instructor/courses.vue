<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">

      <page-separator 
        :title="$t('Development Courses')" />

      <div class="row">
        <div
          v-for="item in development"
          :key="item.id" 
          class="col-sm-6 col-md-4 col-xl-3">
          <instructor-course-card
            :title="item.title"
            :image="item.image" 
            :avatar="(item.avatar || item.image)"
            :position="item.position"
            :open="item.open"
            compact />
        </div>
      </div>

      <pager 
        class="mb-32pt" />

      <page-separator 
        :title="$t('Design Courses')" />

      <div class="row">
        <div 
          v-for="item in design"
          :key="item.id"
          class="col-sm-6 col-md-4 col-xl-3">
          <instructor-course-card
            :title="item.title"
            :image="item.image" 
            :avatar="(item.avatar || item.image)"
            :position="item.position"
            :open="item.open"
            compact />
        </div>
      </div>

      <pager />
    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Development Courses": "Cursuri Programare",
    "Design Courses": "Cursuri Design"
  }
</i18n>


<script>
import Page from '~/components/App/Page'
import InstructorCourseCard from '~/components/App/Instructor/InstructorCourseCard'

export default {
  middleware: ['auth'],
  components: {
    InstructorCourseCard
  },
  extends: Page,
  data() {
    return {
      title: this.$t('Manage Courses'),
      development: [{
        title: 'Learn Angular fundamentals',
        image: 'angular',
        open: true
      }, {
        title: 'Build an iOS Application in Swift',
        image: 'swift'
      }, {
        title: 'Build a WordPress Website',
        image: 'wordpress'
      }, {
        title: 'Become a React Native Developer',
        image: 'react',
        position: 'left'
      }],
      design: [{
        title: 'Learn Sketch',
        image: 'sketch'
      }, {
        title: 'Learn Flinto',
        image: 'flinto'
      }, {
        title: 'Learn Photoshop',
        image: 'photoshop'
      }, {
        title: 'Newsletter Design',
        image: 'mailchimp'
      }]
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Manage Courses')
    }
  }
}
</script>
