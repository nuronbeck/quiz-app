<template>
  <div>
      <vue-good-table
        theme="black-rhino"
        compactMode
        :columns="columns"
        :rows="rows"
        :search-options="searchOptions"
        :pagination-options="paginationOptions"
        :isLoading="statesIsLoading"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field == 'flag'" class="d-flex justify-content-center align-items-center">
            <fmv-avatar 
              :src="require(`~/node_modules/svg-country-flags/svg/${props.row.flag}.svg`)" 
              :alt="props.row.flag"
              size="xs"
              circle
              no-link
            />
          </div>
          <div v-if="props.column.field == 'name'">
            {{ props.row.name }}
          </div>
          <div v-if="props.column.field == 'lang'">
            {{ props.row.lang }}
          </div>
          <div v-if="props.column.field == 'regionsHtml'">
            <a class="bg-primary p-1 pr-3 rounded text-light" style="cursor: pointer"
                @click.prevent="$router.push(localePath(`/admin/locations/state/${props.row.id}`))">
                <md-icon>folder</md-icon>
                {{ $t('Open') }}
            </a>
          </div>
          <div v-if="props.column.field == 'actionsHtml'">
            <span :style="{ cursor: 'pointer', userSelect: 'none' }">
              <md-icon class="text-primary">edit</md-icon>
            </span>
            <span :style="{ cursor: 'pointer', userSelect: 'none' }"
              @click="removeTableRow(props.row)"
            >
              <md-icon class="text-danger">delete</md-icon>
            </span>
          </div>
        </template>
        <div slot="emptystate" :style="{ textAlign: 'center' }">
          {{ $t('No data to show.') }}
        </div>
        <div slot="loadingContent" class="align-center">
          <h4>
            {{ $t('Loading data...') }}
          </h4>
        </div>
      </vue-good-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import sweetalert from '~/mixins/sweetalert'

export default {
  mixins: [
    sweetalert
  ],
  data() {
    return {
      searchOptions: {
        enabled: true,
        skipDiacritics: true,
        placeholder: this.$t('Search'),
      },
      paginationOptions: {
        enabled: true,
        perPage: 5,
        perPageDropdown: [5, 10, 20, 50],
        dropdownAllowAll: false,
        nextLabel: this.$t('next'),
        prevLabel: this.$t('prev'),
        rowsPerPageLabel: this.$t('Display on page'),
        ofLabel: this.$t('from'),
        pageLabel: this.$t('page'),
      },
      columns: [
        {
          label: this.$t('State flag'),
          field: 'flag',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: this.$t('State name'), 
          field: 'name',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('Translated for'), 
          field: 'lang',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('State regions'), 
          field: 'regionsHtml',
          sortable: false,
          globalSearchDisabled: true,
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('Actions'), 
          field: 'actionsHtml',
          sortable: false,
          globalSearchDisabled: true,
          thClass: 'text-center',
          tdClass: 'text-center'
        }
      ],
      rows: []
    }
  },
  methods: {
    ...mapActions({
      loadStates: 'admin/loadStates'
    }),
    fillTableData(){
      this.loadStates()
      .then(() => {
        this.rows = [...this.states]
      })
    },
    removeTableRow(stateData){
      let statePayload = { ...stateData }
      this.removeStateSuggestion(statePayload)
      .then(() => {
        this.$store.dispatch('admin/removeState', statePayload.id)
        .then(() => {
          this.notifyToast(this.$t('State has been deleted.'), 'success')
          this.fillTableData()
        })
        .catch(() => {
          this.notifyToast(this.$t('State has not been deleted.'), 'error')
        })
      })
    }
  },
  mounted(){
    this.fillTableData()
  },
  computed: {
    ...mapGetters({
      states: 'admin/states',
      statesIsLoading: 'admin/statesIsLoading'
    })
  }
}
</script>
