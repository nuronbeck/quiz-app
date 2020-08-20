<template>
  <a
    :target="item.target !== false ? (item.target || '_blank') : null" 
    :href="item.demo_url" 
    class="d-block overlay">
    <img 
      :src="item.src" 
      :alt="item.alt"
      class="img-fluid">
    <span class="overlay__content">
      <span
        v-if="item.demo_url && item.button !== false" 
        class="btn btn-accent btn-rounded btn--raised overlay__action"
        v-text="item.button || 'Demo'" />
    </span>
  </a>
</template>

<script>
  import { handler } from 'dom-factory'
  import 'ui-huma/js/overlay'

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    beforeDestroy() {
      handler.downgradeElement(this.$el, 'overlay')
    },
    mounted() {
      this.$nextTick(() => {
        handler.upgradeElement(this.$el, 'overlay')
      })
    }
  }
</script>