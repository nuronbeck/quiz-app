<template>
  <div class="page-section">
    <div :class="containerClass">
      <page-headline
        :title="$t('Feedback')"
        :description="$t('feedback_description')"
        center />
      
      <feedback-carousel />
    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Feedback": "Păreri",
    "feedback_description": "Ce au de spus despre noi alți studenți deveniți profesioniști după ce au învățat cu noi și și-au atins obiectivele."
  }
</i18n>

<i18n locale="en">
  {
    "feedback_description": "What other students turned professionals have to say about us after learning with us and reaching their goals."
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import FeedbackCarousel from '~/components/App/FeedbackCarousel'

  export default {
    components: {
      FeedbackCarousel
    },
    mixins: [layoutConfigMixin]
  }
</script>