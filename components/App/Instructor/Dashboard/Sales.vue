<template>
  <div>
    <card
      :header-btn="true" 
      :title="$t('Sales today')"
      :subtitle="$t('by course')"
      :header-btn-title="$t('Earnings')"
      :header-btn-route="localePath('instructor-earnings')"
      no-body>
      <b-list-group 
        class="list-group-flush border-top-0">
        <b-list-group-item
          v-for="(item, idx) in items"
          :key="`sales_${idx}`">
          <b-media
            vertical-align="center"
            right-align>
            <b-link
              :to="localePath('instructor-edit-course')"
              class="text-body">
              <strong v-text="item.title" />
            </b-link>
            <b-badge
              slot="aside"
              :variant="item.variant"
              pill
              v-text="item.count" />
          </b-media>
        </b-list-group-item>
      </b-list-group>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Basics of HTML',
          variant: 'light',
          count: 15
        },
        {
          title: 'Angular in Steps',
          variant: 'light',
          count: 50
        },
        {
          title: 'Bootstrap Foundations',
          variant: 'light',
          count: 14
        },
        {
          title: 'GitHub Basics',
          variant: 'light',
          count: 14
        }
      ]
    }
  }
}
</script>
