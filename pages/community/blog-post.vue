<template>
  <div>
    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <blog-post-heading 
          class="d-flex flex-column flex-md-row align-items-center align-items-md-start flex mb-16pt text-center text-md-left" />
      </div>
    </div>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        <blog-post />
      </div>
    </div>

    <div class="page-section bg-alt">
      <div :class="containerClass">
        <feedback />
      </div>
    </div>
  </div>
</template>

<script>
import Page from '~/components/App/Page'
import BlogPostHeading from '~/components/App/Blog/BlogPostHeading'
import BlogPost from '~/components/App/Blog/BlogPost'
import Feedback from '~/components/App/Feedback'

export default {
  components: {
    BlogPost,
    BlogPostHeading,
    Feedback
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Blog Post')
    }
  },
  computed: {
    guest() {
      return true
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Blog Post')
    }
  }
}
</script>
