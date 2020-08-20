<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">

      <client-only placeholder="Loading ...">
        <app-icons />
      </client-only>

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/ComponentsPage'
import AppIcons from '~/components/App/Icons.vue'

export default {
  components: {
    AppIcons
  },
  extends: Page,
  data() {
    return {
      title: 'Icons'
    }
  }
}
</script>
