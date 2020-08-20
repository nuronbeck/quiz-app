<template>
  <b-navbar
    type="light"
    toggleable="sm" 
    class="navbar-submenu navbar-list p-0 m-0 align-items-center">
    <div :class="containerClass">
      <ul class="nav navbar-nav flex align-items-sm-center">
        <li 
          class="nav-item navbar-list__item"
          v-text="$tc('questions', 30, { questions: 30 })" />
        <li class="nav-item navbar-list__item">
          <md-icon 
            class="text-muted" 
            left
            v-text="'schedule'" />
          1m 10s
        </li>
      </ul>
    </div>
  </b-navbar>
</template>

<i18n locale="en">
  {
    "questions": "{questions} Question | {questions} Questions"
  }
</i18n>

<i18n locale="ro">
  {
    "questions": "{questions} Întrebare | {questions} Întrebări"
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'

  export default {
    mixins: [layoutConfigMixin]
  }
</script>