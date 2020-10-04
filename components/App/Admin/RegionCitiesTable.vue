<template>
  <div>
      <vue-good-table
        theme="black-rhino"
        compactMode
        :columns="columns"
        :rows="rows"
        :search-options="searchOptions"
        :pagination-options="paginationOptions"
        :isLoading="districtsIsLoading"
      >
        <template slot="table-row" slot-scope="props">
          
          <div v-if="props.column.field == 'name'">
            {{ props.row.name }}
          </div>
          <div v-if="props.column.field == 'lang'">
            {{ props.row.lang }}
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
          label: this.$t('City name'), 
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
  watch: {
    districts(oldValue, newValue){
      this.fillTableData()
    }
  },
  computed: {
    ...mapGetters({
      districts: 'admin/districts',
      districtsIsLoading: 'admin/districtsIsLoading'
    })
  },
  methods: {
    fillTableData(){
      this.rows = [...this.districts]
    },
    removeTableRow(rowData){
      let removingPayload = { ...rowData }
      this.removeTableRowModal(this.$t('The city <b> %{name} </b> and all related with it the data will be permanently deleted!', { 
          name: removingPayload.name
        })
      )
      .then(() => {
        this.$store.dispatch('admin/removeDistrict', statePayload.id)
        .then(() => {
          this.notifyToast(this.$t('City has been deleted.'), 'success')
          this.fillTableData()
        })
        .catch(() => {
          this.notifyToast(this.$t('City has not been deleted.'), 'error')
        })
      })
    }
  },
  mounted(){
    this.fillTableData()
  }
}
</script>
