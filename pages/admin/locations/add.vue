<template>
  <div class="mb-5 pb-5">
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />

    <div 
      :class="containerClass"
      class="page-section">
    
      <div class="d-flex justify-content-start pb-3">
        <button class="btn btn-secondary" @click="$router.push(localePath('admin-locations'))">
          <md-icon>arrow_back</md-icon>
          {{ $t('Back to states') }}
        </button>
      </div>
      
      <page-separator
        :title="$t('Add country')" />
      
      <b-card no-body>  
        <form class="p-3">
          <div class="form-group">
            <label>{{ $t('State flag').toUpperCase() }}</label>
            <v-select :class="$v.newState.flag.$invalid ? 'is-invalid' : ''"
              :style="{ maxWidth: '100px' }"
              :options="flagsList" label="pathShort" :clearable="false" :searchable="false"
              v-model="selectedFlagInstance" @input="selectedFlag"
              :disabled="isSavingLoading"
            >
              <template slot="option" slot-scope="option">
                <div class="d-center">
                  <fmv-avatar 
                    :src="option.pathLong" 
                    :alt="$i18n.locale"
                    size="xs"
                    circle
                    no-link
                  />
                  </div>
              </template>

              <template slot="selected-option" slot-scope="option">
                <div class="selected d-center">
                  <fmv-avatar 
                    :src="option.pathLong" 
                    :alt="$i18n.locale"
                    size="xs"
                    circle
                    no-link
                  />
                </div>
              </template>

            </v-select>
            <div class="invalid-feedback">
              {{ $t('*Flag is not selected') }}
            </div>
          </div>
          <div class="form-group">
            <label>{{ $t('State name').toUpperCase() }}</label>
            <input v-model="newState.name" :class="$v.newState.name.$invalid ? 'is-invalid' : ''"
              type="text" class="form-control" :placeholder="$t('State name')" :disabled="isSavingLoading">
            <div class="invalid-feedback">
              {{ $t('*Required') }}
            </div>
          </div>
          <div class="form-group">
            <label>{{ $t('State for language').toUpperCase() }}</label>
            <v-select
              :class="$v.newState.lang.$invalid ? 'is-invalid' : ''"
              :options="$i18n.locales"
              label="code"
              @input="newState.lang = selectedLangInstance.code"
              v-model="selectedLangInstance"
              :clearable="false"
              :searchable="false"
              :disabled="isSavingLoading"
            >
              <template slot="option" slot-scope="option">
                <div class="d-center">
                  <fmv-avatar 
                    :src="require(`~/node_modules/svg-country-flags/svg/${option.code}.svg`)" 
                    :alt="$i18n.locale"
                    size="xs"
                    circle
                    no-link
                  />
                  {{ $t(option.code) }}
                  </div>
              </template>

              <template slot="selected-option" slot-scope="option">
                <div class="selected d-center">
                  <fmv-avatar 
                    :src="require(`~/node_modules/svg-country-flags/svg/${option.code}.svg`)" 
                    :alt="$i18n.locale"
                    size="xs"
                    circle
                    no-link
                  />
                  {{ $t(option.code) }}
                </div>
              </template>
            </v-select> 
            <div class="invalid-feedback">
              {{ $t('*Required') }}
            </div>
          </div>

          <div class="text-right">
            <button @click="saveNewState" type="button" class="btn btn-success" :disabled="isSavingLoading">
              <span v-if="isSavingLoading" class="spinner-border spinner-border-sm"></span>
              <md-icon v-if="!isSavingLoading">save</md-icon>
              <span class="pl-1"> 
                {{ isSavingLoading ? $t('Loading...') : $t('Save') }}
              </span>
            </button>
          </div>
        </form>
      </b-card>

    </div>
  </div>
</template>

<script>
  import Page from '~/components/App/Page'
  import { required } from 'vuelidate/lib/validators'
  import Swal from '~/mixins/sweetalert'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    middleware: [
      'auth',
      'admin'
    ],
    mixins: [
      Swal
    ],
    extends: Page,
    computed: {
      ...mapGetters({
        isSavingLoading: 'admin/isSavingLoading'
      })
    },
    data() {
      return {
        title: this.$t('Add country'),
        flagsList: [],
        selectedFlagInstance: null,
        selectedLangInstance: null,
        newState: {
          flag: null,
          name: '',
          lang: ''
        }
      }
    },
    validations: {
      newState: {
        flag: {
          required
        },
        name: {
          required
        },
        lang: {
          required
        }
      }
    },
    methods: {
      ...mapActions({
        saveState: 'admin/saveState'
      }),
      loadFlagsNames(){
        this.importAllFlags(require.context('~/node_modules/svg-country-flags/svg/', true, /\.svg$/))
      },
      importAllFlags(r) {
        r.keys().forEach(key => (this.flagsList.push({ pathLong: r(key), pathShort: key })));
      },
      selectedFlag(){
        let splits = this.selectedFlagInstance.pathShort.split('.')[1]
        this.newState.flag = splits.substr(1, splits.length)
      },
      async saveNewState(){
        this.$v.$touch()
        if(!this.$v.$invalid){
          await this.saveState(this.newState)
          .then(() => {
            this.notifyToast(this.$t('State successfully added!'), 'success')
            .then(() => {
              this.$router.push(this.localePath('admin-locations'))
            })
          })
          .catch(() => {
            this.notifyToast(this.$t("Server error! State hasn't been added!"), 'error')
          })
        } else {
          this.notifyToast(this.$t('Error adding, check inputs filled correctly!'), 'error')
        }
      },
    },
    mounted(){
      this.loadFlagsNames()
    },
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Add country')
      }
    }
  }
</script>
