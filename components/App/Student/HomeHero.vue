<template>
  <div 
    :class="containerClass"
    class="hero text-center text-md-left py-112pt">
    <h1 
      class="text-white text-shadow"
      v-text="title" />
    <p 
      class="lead measure-hero-lead mx-auto mx-md-0 text-white text-shadow"
      :class="[ cta || link ? 'mb-48pt' : 'mb-0' ]"
      v-text="subtitle" />
    
    <b-btn
      v-if="cta" 
      :to="localePath(ctaRoute)" 
      size="lg"
      variant="white btn--raised mb-16pt"
      v-text="$t('Browse Courses')" />

    <p
      v-if="link" 
      class="mb-0">
      <b-link 
        :to="localePath(linkRoute)"
        class="text-white text-shadow"
        v-html="`<strong>${linkLabel}</strong>`" />
    </p>
  </div>
</template>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'

  export default {
    mixins: [layoutConfigMixin],
    props: {
      title: {
        type: String,
        default() {
          return this.$t('home_hero_title')
        }
      },
      subtitle: {
        type: String,
        default() {
          return this.$t('home_hero_description')
        }
      },
      link: {
        type: Boolean,
        default: true
      },
      linkRoute: {
        type: [String, Object],
        default: null
      },
      linkLabel: {
        type: String,
        default() {
          return this.$t('Are you a teacher?')
        }
      },
      cta: {
        type: Boolean,
        default: true
      },
      ctaRoute: {
        type: [String, Object],
        default() {
          return 'student-courses'
        }
      }
    }
  }
</script>