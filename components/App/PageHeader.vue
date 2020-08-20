<template>
  <div class="pt-32pt">
    <div
      :class="containerClass" 
      class="d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
      <div 
        :class="{ 'mb-24pt mb-md-0': !!buttonLabel }"
        class="flex d-flex flex-column flex-sm-row align-items-center">
        <div class="mb-24pt mb-sm-0 mr-sm-24pt">
          <page-heading 
            class="mb-0"
            v-text="title" />
          
          <b-breadcrumb
            v-if="breadcrumb" 
            :items="breadcrumb"
            class="mb-0" />
        </div>
      </div>

      <div
        v-if="buttonLabel" 
        class="row">
        <div class="col-auto">
          <b-btn
            :to="localePath(buttonPath)"
            variant="outline-secondary"
            v-text="buttonLabel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonLabel: {
      type: String,
      default: null
    },
    buttonPath: {
      type: String,
      default: null
    },
    breadcrumb: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: null
    },
    containerClass: {
      type: String,
      default: null
    }
  }
}
</script>