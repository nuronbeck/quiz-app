<template>
  <card
    :header-btn="true" 
    :title="$t('Courses')"
    :subtitle="$t('Your recent courses')"
    :header-btn-title="$t('My courses')"
    no-body>

    <b-list-group
      class="list-group-fit"
      style="z-index: initial;">
      <b-list-group-item
        v-for="item in courses"
        :key="item.title"
        style="z-index: initial;">
        <b-media 
          right-align
          vertical-align="center">
          <div class="d-flex align-items-center">
            <fmv-avatar
              :src="item.avatar" 
              :to="localePath('take-course')"
              alt="course" 
              landscape
              size="sm" 
              class="mr-3" />
            <div class="flex">
              <b-link 
                :to="localePath('take-course')"
                class="text-body">
                <strong v-text="item.title" />
              </b-link>
              <div class="d-flex align-items-center">
                <b-progress
                  :variant="progressVariant(item.progress)"
                  :value="item.progress"
                  :max="100"
                  style="width: 100px;" />
                <small class="text-muted ml-2">{{ item.progress }}%</small>
              </div>
            </div>
          </div>
          <b-dropdown
            slot="aside"
            class="ml-3"
            variant="flush" 
            right
            no-caret>
            <template slot="button-content">
              <md-icon class="text-muted font-size-24pt">more_vert</md-icon>
            </template>
            <b-dropdown-item 
              :to="localePath('take-course')">
              {{ $t('Continue') }}
            </b-dropdown-item>
          </b-dropdown>
        </b-media> 
      </b-list-group-item>
    </b-list-group>
  </card>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: 'Learn Vue.js Fundamentals',
          avatar: '/images/gulp.png',
          progress: 25
        },
        {
          title: 'Angular in Steps',
          avatar: '/images/vuejs.png',
          progress: 100
        },
        {
          title: 'Bootstrap Foundations',
          avatar: '/images/nodejs.png',
          progress: 80
        }
      ]
    }
  },
  methods: {
    progressVariant(progress) {
      if (progress > 50 && progress < 100) {
        return 'warning'
      } else if (progress === 100) {
        return 'success'
      } else {
        return 'primary'
      }
    }
  }
}
</script>
