<template>
  <div>
    <page-separator
      :title="$t('Sections')" />

    <edit-course-toc 
      boxed
      class="mb-24pt" />

    <b-btn 
      variant="outline-secondary"
      class="mb-24pt mb-sm-0"
      v-text="$t('Add Section')" />
  </div>
</template>

<i18n locale="ro">
  {
    "Sections": "Secțiuni",
    "Add Section": "Adaugă Secțiune"
  }
</i18n>

<script>
  import EditCourseToc from '~/components/App/Instructor/EditCourseToc'

  export default {
    components: {
      EditCourseToc
    }
  }
</script>