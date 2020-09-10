<template>
  <div>
      <vue-good-table
        theme="black-rhino"
        compactMode
        :columns="columns"
        :rows="rows"
        :search-options="searchOptions"
        :pagination-options="paginationOptions"
        :isLoading="usersIsLoading"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field == 'avatar'" >
            <span @click="takeImageLook(!!props.row.avatar ? $store.getters['settings/appURI'] + props.row.avatar : require('~/assets/images/user_ava_temp.jpg'))">
              <fmv-avatar
                slot="aside"
                :src="!!props.row.avatar ? $store.getters['settings/appURI'] + props.row.avatar : require('~/assets/images/user_ava_temp.jpg')"
                alt="ava"
                circle
                class="overlay overlay--primary"
              >
              </fmv-avatar>
            </span>
          </div>
          <div v-if="props.column.field == 'last_name'">
            {{ props.row.last_name }}
          </div>
          <div v-if="props.column.field == 'first_name'">
            {{ props.row.first_name }}
          </div>
          <div v-if="props.column.field == 'phone'">
            {{ props.row.phone }}
          </div>
          <div v-if="props.column.field == 'lang'" class="d-flex justify-content-center align-items-center">
            <fmv-avatar 
              :src="require(`~/node_modules/svg-country-flags/svg/${props.row.lang}.svg`)" 
              :alt="props.row.lang"
              size="xs"
              circle
              no-link
            />
            <span class="ml-1">
              {{ $t(props.row.lang) }}
            </span>
          </div>
          <div v-if="props.column.field == 'status'">
            <span class="text-danger" v-if="props.row.status == 0" >
              {{ $t('Not verified') }}
            </span>
            <span class="text-success" v-if="props.row.status == 1" >
              {{ $t('Verified') }}
            </span>
          </div>
          <div v-if="props.column.field == 'actionsHtml'">
            <span :style="{ cursor: 'pointer', userSelect: 'none' }">
              <md-icon class="text-primary">edit</md-icon>
            </span>
            <span :style="{ cursor: 'pointer', userSelect: 'none' }"
              @click="removeUserAction(props.row)"
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
          label: this.$t('Avatar'),
          field: 'avatar',
          sortable: false,
          globalSearchDisabled: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: this.$t('Phone number'), 
          field: 'phone',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('Last name'),
          field: 'last_name',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('First name'),
          field: 'first_name',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('Verification'), 
          field: 'status',
          type: 'number',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: this.$t('Language'), 
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
  methods: {
    ...mapActions({
      loadAllUsers: 'admin/loadAllUsers'
    }),
    fillUsersTable(){
      this.loadAllUsers()
      .then(() => {
        this.rows = [...this.users]
      })
    },
    async removeUserAction(user){ 
      let userPayload = { ...user }
      this.removeUserSuggestion(userPayload)
      .then(() => {
        this.$store.dispatch('admin/removeUser', userPayload.id)
        .then(() => {
          this.notifyToast(this.$t('User has been deleted.'), 'success')
          this.fillUsersTable()
        })
        .catch(() => {
          this.notifyToast(this.$t('User has not been deleted.'), 'error')
        })
      })
    }
  },
  mounted(){
    this.fillUsersTable()
  },
  computed: {
    ...mapGetters({
      users: 'admin/users',
      usersIsLoading: 'admin/usersIsLoading'
    })
  }
}
</script>
