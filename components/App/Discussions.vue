<template>
  <b-list-group 
    flush
    class="border-0">
    <b-list-group-item
      v-for="item in localItems"
      :key="item.id"
      class="p-3">
      <div class="row align-items-start">
        <div class="col-md-3 mb-8pt mb-md-0">
          <div class="media align-items-center">
            <div class="media-left mr-12pt">
              <fmv-avatar
                :to="localePath('community-student-profile')" 
                :title="item.avatarTitle"
                :src="item.avatar"
                size="sm"
                circle />
            </div>
            <div class="d-flex flex-column media-body media-middle"> 
              <b-link
                :to="localePath('community-student-profile')"  
                class="card-title"
                v-text="item.name" />
              <small 
                class="text-muted"
                v-text="item.date_for_humans" />
            </div>
          </div>
        </div>
        <div class="col mb-8pt mb-md-0">
          <p
            :class="{ 'mb-8pt': !!item.chips, 'mb-0': !item.chips }">
            <b-link 
              :to="localePath('community-discussion')" 
              class="text-body"><strong>{{ item.title }}</strong></b-link>
          </p>
          <template v-if="item.chips">
            <b-link
              v-for="chip in item.chips"
              :key="chip.id" 
              :to="localePath('community-discussion')"
              exact 
              class="chip chip-outline-secondary">{{ chip }}</b-link>
          </template>
        </div>
        <div class="col-auto d-flex flex-column align-items-center justify-content-center">
          <h5 class="m-0">{{ item.answers || 1 }}</h5>
          <p 
            class="lh-1 mb-0 small text-70"
            v-text="$tc('answers', item.answers || 1)" />
        </div>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<i18n locale="ro">
  {
    "answers": "răspuns | răspunsuri"
  }
</i18n>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      localItems() {
        let items = this.items
        return items.map(item => {
          item.date_for_humans = this.$t('diff_for_humans', {
            when: this.$tc('datetime_units.day', item.date, { value: item.date })
          })
          return item
        })
      }
    }
  }
</script>