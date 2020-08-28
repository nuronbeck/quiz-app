<template>
  <div>
    <div 
      :class="containerClass" 
      class="page-section">
      
      <results-heading
        :enable-sidebar-toggle="resultsHeadingSidebarToggle"
        v-if="false"
      />

      <div v-for="(course, ind) in categoriesByLanguage" :key="ind">
        <page-separator>{{ course.name }}</page-separator>

        <div class="row card-group-row">
          <div
            v-for="item in course.courses"
            :key="item.id" 
            class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
            <course-card
              :title="item.name"
              :image="false ? `${$axios.defaults.baseURL}/${item.file.path}` : '/images/paths/devops_430x168.png'"
              :avatar="item.avatar || '/images/paths/devops_40x40@2x.png'"
              :free="item.free"
              :favorite="item.favorite"
              :position="item.position"
              :open="item.open"
              :author-avatar="item.author_avatar"
              card-class="card-group-row__card"
              class="d-flex w-100" />
          </div>
        </div>
        
        <pager class="mb-32pt" />

      </div> 

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import ResultsHeading from '~/components/App/ResultsHeading'
import CourseCard from '~/components/App/CourseCard'

import LibraryDrawer from '~/components/App/LibraryDrawer'
import LibrarySidebar from '~/components/App/LibrarySidebar'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ResultsHeading,
    CourseCard
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Browse Courses')
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
    }),
    categoriesByLanguage(){
      return this.categories.filter(categoryItem => categoryItem.lang == this.$i18n.locale)
    },
    guest() {
      return true
    },
    subLayout() {
      return this.$root.layoutName === 'fixed'
    },
    subLayoutDrawer() {
      return this.$root.layoutName === 'fixed' 
        ? LibrarySidebar
        : LibraryDrawer
    },
    subLayoutDrawerId() {
      return 'library-drawer'
    },
    resultsHeadingSidebarToggle() {
      return this.$root.layoutName === 'fixed' ? 'mobile' : true
    }
  },
  methods: {
    ...mapActions({
      loadCategories: 'categories/loadCategories'
    })
  },
  created(){
    this.loadCategories() 
  },
  async asyncData({ app }) { 
    return {
      title: app.i18n.t('Browse Courses')
    }
  }
}
</script>
