<template>
  <b-navbar
    type="light"
    toggleable="sm" 
    class="bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
    <div :class="containerClass">
      <ul class="nav navbar-nav flex align-items-sm-center">
        <li 
          class="nav-item navbar-list__item"
          v-text="$tc('lessons', 28, { lessons: 28 })" />
        <li class="nav-item navbar-list__item">
          <md-icon 
            class="text-muted" 
            left>schedule</md-icon>
          2h 46m
        </li>
      </ul>
    </div>
  </b-navbar>
</template>

<i18n locale="en">
  {
    "lessons": "{lessons} Lesson | {lessons} Lessons"
  }
</i18n>

<i18n locale="ro">
  {
    "lessons": "{lessons} Lecție | {lessons} Lecții"
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  export default {
    mixins: [layoutConfigMixin]
  }
</script>