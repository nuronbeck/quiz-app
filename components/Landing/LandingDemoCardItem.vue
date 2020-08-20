<template>
  <div>
    <landing-demo-link
      :item="item"
      class="mb-8pt" />
    <div class="page-separator page-separator-demo mb-24pt">
      <div 
        class="page-separator__text bg-dark text-white"
        v-text="item.title" />
    </div>
  </div>
</template>

<script>
  import LandingDemoLink from '~/components/Landing/LandingDemoLink'

  export default {
    components: {
      LandingDemoLink
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>