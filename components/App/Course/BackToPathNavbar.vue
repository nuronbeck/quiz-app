<template>
  <b-navbar
    type="light"
    toggleable="sm" 
    class="navbar-list">
    <div :class="containerClass">
      <ul class="nav navbar-nav w-100">
        <li class="nav-item navbar-list__item py-16pt py-sm-0">
          <b-link 
            :to="localePath('student-path')" 
            class="nav-link">
            <md-icon left>keyboard_backspace</md-icon>
            {{ $t('Back to Learning Path') }}
          </b-link>
        </li>
        <li class="nav-item navbar-list__item py-16pt py-sm-0">
          <b-media vertical-align="center">
            <template v-slot:aside>
              <b-link :to="localePath('student-path')">
                <img 
                  src="/images/paths/angular_64x64.png" 
                  width="40" 
                  alt="Angular" 
                  class="rounded">
              </b-link>
            </template>
            <div class="d-flex flex-column">
              <b-link 
                :to="localePath('student-path')" 
                class="card-title"
                v-text="$t('learn', { topic: 'Angular' })" />
              <p 
                class="text-50 lh-1 mb-0 small"
                v-text="$tc('courses', 24, { courses: 24 })" />
            </div>
          </b-media>
        </li>
      </ul>
    </div>
  </b-navbar>
</template>

<i18n locale="en">
  {
    "learn": "Learn {topic}",
    "courses": "{courses} courses | {courses} course"
  }
</i18n>

<i18n locale="ro">
  {
    "Back to Learning Path": "Înapoi la Calificare",
    "learn": "Învață {topic}",
    "courses": "{courses} curs | {courses} cursuri"
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'

  export default {
    mixins: [layoutConfigMixin]
  }
</script>