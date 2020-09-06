<template>
  <div 
    class="d-flex align-items-center" 
    style="min-height: 100vh">
    <div 
      class="col-sm-8 col-md-6 col-lg-4 mx-auto"
      style="min-width: 300px;">
      <div class="text-center mt-5 mb-1">
        <fmv-avatar
          :to="localePath('/')"
          :title="true"
          title-class="bg-primary">
          <b-img 
            src="/images/illustration/student/128/white.svg" 
            class="img-fluid"
            width="40" 
            :alt="$store.state.brand" />
        </fmv-avatar>
      </div>
      <div class="d-flex justify-content-center mb-4 navbar-light">
        <!-- Brand -->
        <b-link 
          :to="localePath('/')"
          class="navbar-brand m-0"
          v-text="$store.state.brand" />
      </div>
      <card 
        :title="$t(title)"
        :subtitle="$t('Create a new account')"
        header-class="text-center"
        class="navbar-shadow">

        <!-- <b-btn 
          :to="localePath('student-dashboard')"
          variant="light"
          exact
          block
          class="mb-16pt">
          <span class="fab fa-google mr-2" />
          {{ $t('Continue with Google') }}
        </b-btn>

        <page-separator
          :title="$t('or')"
          text-class="bg-white"
          center /> -->

        <b-form
          method="post">

          <div v-if="false" class="alert alert-danger text-center" role="alert">
            SignUp Error!
          </div>

          <b-form-group
            :label="`${$t('Choose your language')}:`"
            label-class="form-label"
          >
            <v-select
              class="border-danger"
              :options="localesData"
              label="code"
              @input="changeUserLanguage" 
              v-model="selectedLanguage"
              :clearable="false"
              :searchable="false"
            >
              <template slot="option" slot-scope="option">
                <div class="d-center">
                  <fmv-avatar 
                    :src="require(`~/node_modules/svg-country-flags/svg/${flag(option.code)}.svg`)" 
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
                    :src="require(`~/node_modules/svg-country-flags/svg/${flag(option.code)}.svg`)" 
                    :alt="$i18n.locale"
                    size="xs"
                    circle
                    no-link
                  />
                  {{ $t(option.code) }}
                </div>
              </template>

            </v-select> 

          </b-form-group>

          <hr class="mb-4">

          <b-form-group
            :label="`${$t('Select your country')}:`"
            label-class="form-label"
            :state="selectedCountry !== null"
            :invalid-feedback="'*' + $t('Select your country')"
          >
              <v-select
                :options="this.$i18n.locale == 'en' ? [...states] : [...states.filter(stateItem => stateItem.lang == this.$i18n.locale)]"
                label="name"
                v-model="selectedCountry"
                @input="changedCountry"
                :loading="statesIsLoading"
              >
                <template slot="option" slot-scope="option">
                  <div class="d-center">
                    <fmv-avatar 
                      :src="require(`~/node_modules/svg-country-flags/svg/${flag(option.flag)}.svg`)" 
                      :alt="$i18n.locale"
                      size="xs"
                      circle
                      no-link
                    />
                    {{ option.name }}
                    </div>
                </template>

                <template slot="selected-option" slot-scope="option">
                  <div class="selected d-center">
                    <fmv-avatar 
                      :src="require(`~/node_modules/svg-country-flags/svg/${flag(option.flag)}.svg`)" 
                      :alt="$i18n.locale"
                      size="xs"
                      circle
                      no-link
                    />
                    {{ option.name }}
                  </div>
                </template>

              </v-select> 
          </b-form-group>

          <b-form-group
            v-if="selectedCountry !== null"
            :label="`${$t('Select your region')}:`"
            label-class="form-label"
            :state="selectedRegion !== null"
            :invalid-feedback="'*' + $t('Select your region')"
          >
              <v-select
                class="border-danger"
                :options="[...regions]"
                label="name"
                v-model="selectedRegion"
                @input="changedRegion"
                :disabled="selectedCountry == null"
                :loading="regionsIsLoading"
              >
                <template slot="option" slot-scope="option">
                  <div class="d-center"> 
                    {{ option.name }}
                    </div>
                </template>
              </v-select> 
          </b-form-group> 



          <b-form-group
            v-if="selectedRegion !== null"
            :label="`${$t('Select your district')}:`"
            label-class="form-label"
            :state="!$v.newUser.address_id.$invalid"
            :invalid-feedback="'*' + $t('Select your district')"
          >
              <v-select
                class="border-danger"
                :options="[...districts]"
                label="name"
                v-model="selectedDistrict"
                @input="selectedDistrict === null ? newUser.address_id = null : newUser.address_id = selectedDistrict.id"
                :disabled="selectedRegion == null"
                :loading="districtsIsLoading"
              >
                <template slot="option" slot-scope="option">
                  <div class="d-center"> 
                    {{ option.name }}
                    </div>
                </template>
              </v-select> 
          </b-form-group> 

          
          
          
          <b-form-group
            :label="`${$t('Last name')}:`"
            label-for="lastname"
            label-class="form-label"
            :state="!$v.newUser.last_name.$invalid"
            :invalid-feedback="$t('*Last name is required')"
          >
            <fmv-input-group-merge
              id="lastname"
              :placeholder="$t('Your last name')"
              type="text"
              required
              prepend
              v-model="newUser.last_name"
              :state="!$v.newUser.last_name.$invalid"
            >
              <span class="fas fa-user" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('First name')}:`"
            label-for="firstname"
            label-class="form-label"
            :state="!$v.newUser.first_name.$invalid"
            :invalid-feedback="$t('*First name is required')" 
          >
            <fmv-input-group-merge
              id="firstname"
              :placeholder="$t('Your first name')"
              type="text"
              required
              prepend
              v-model="newUser.first_name"
              :state="!$v.newUser.first_name.$invalid"
            >
              <span class="fas fa-user" />
            </fmv-input-group-merge>
          </b-form-group>
          
          <b-form-group
            :label="`${$t('Your phone number')}:`"
            label-for="phone"
            label-class="form-label"
            :state="!$v.newUser.phone.$invalid"
            :invalid-feedback="$t('*Phone is required. (Format +998XXZZZXXXX)')"
          >
            <fmv-input-group-merge
              id="phone"
              :placeholder="$t('Your phone number')"
              type="text"
              required
              prepend
              v-model="newUser.phone"
              :state="!$v.newUser.phone.$invalid"
            >
              <span class="fas fa-phone" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('Your password')}:`"
            label-for="password"
            label-class="form-label"
            :state="!$v.newUser.password.$invalid"
            :invalid-feedback="$t('*Password is required. (min. 6, max. 16 symbols)')" 
          >
            <fmv-input-group-merge
              id="password"
              :placeholder="$t('Your password')"
              type="password"
              class="form-control-prepended"
              required
              prepend
              v-model="newUser.password"
              :state="!$v.newUser.password.$invalid"
            >
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('Confirm password')}:`"
            label-for="repassword"
            label-class="form-label"
            :state="!$v.newUser.repassword.$invalid"
            :invalid-feedback="$t('*Rewrite password again.')" 
          >
            <fmv-input-group-merge
              id="repassword"
              :placeholder="$t('Confirm password')"
              type="password"
              class="form-control-prepended"
              required
              prepend
              v-model="newUser.repassword"
              :state="!$v.newUser.repassword.$invalid"
            >
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <div class="form-group text-center text-black-70">
            <b-form-checkbox 
              id="terms"
              :checked="termsAgreement"
              v-model="termsAgreement"
              required>
              {{ $t('I agree to the') }}
              <b-link 
                :to="localePath('terms')" 
                class="text-black-70" 
                style="text-decoration: underline;"
                v-text="$t('Terms of Use')" />
            </b-form-checkbox>
          </div>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Sign Up')"
              :class=" !termsAgreement ? { disabled: 'disabled' } : ''"
              @click.prevent="termsAgreement ? submitSignUp() : false"
            />
          </div> 

        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Already signed up?') }} 
          <b-link
            :to="localePath('login')"
            v-text="$t('Login')" />
        </div>
      </card>

    </div>
  </div>  
</template>


<script>
import { locales } from '~/config/i18n'
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import sweetalert from '~/mixins/sweetalert'
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'blank',
  mixins: [
    sweetalert
  ],
  mounted(){
    this.selectedLanguage = locales.filter((lang) => lang.code == this.$i18n.locale)[0]
    this.newUser.lang = this.selectedLanguage.code
  },
  computed: {
    ...mapGetters({
      states: 'regions/states',
      statesIsLoading: 'regions/statesIsLoading',
      regions: 'regions/regions',
      regionsIsLoading: 'regions/regionsIsLoading',
      districts: 'regions/districts',
      districtsIsLoading: 'regions/districtsIsLoading',
      isRegisteringUser: 'user/isRegisteringUser',
      user: 'user/user'
    }),
    localesData(){
      return locales
    }
  },
  data() {
    return {
      title: 'Sign Up',
      signUpError: false,
      termsAgreement: false,
      selectedCountry: null, 
      selectedRegion: null,
      selectedDistrict: null,
      selectedLanguage: null,
      newUser: {
        lang: null,
        address_id: null,
        first_name: '',
        last_name: '',
        phone: '',
        avatar: null,
        password: '',
        repassword: ''
      }
    }
  },
  validations: {
    newUser: {
      lang: {
        required
      },
      address_id: {
        required
      },
      first_name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16)
      },
      last_name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16)
      },
      phone: {
        required,
        phoneValidator: (phone) => /^\+[0-9]?[0-9](\d[0-9]{9})$/gm.test(phone)
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(16)
      },
      repassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  async fetch(){
    if(this.states.length === 0) {
      this.loadStates()
    }
  },
  methods: {
    ...mapActions({
      loadStates: 'regions/loadStates',
      loadRegions: 'regions/loadRegions',
      loadDistricts: 'regions/loadDistricts',
      userRegister: 'user/userRegister'
    }),
    changedCountry(){
      this.selectedRegion = null
      if(this.selectedCountry !== null){ 
        this.loadRegions(this.selectedCountry.id)
      }else {
        this.newUser.address_id = null
      }
    },
    changedRegion(){
      this.selectedDistrict = null
      if(this.selectedCountry !== null && this.selectedRegion !== null){
        this.loadDistricts(this.selectedRegion.id)
      }else {
        this.newUser.address_id = null
      }
    },
    changeUserLanguage(){ 
      if(this.selectedLanguage !== null ){
        this.newUser.lang = this.selectedLanguage.code
      } else {
        this.newUser.lang = null
      }

      this.$router.push(this.switchLocalePath(this.selectedLanguage.code))
    },
    async submitSignUp(){
      this.$v.$touch()
      if(!this.$v.$invalid){
        let { repassword, ...userPayload } = this.newUser
        await this.userRegister(userPayload).then(() => {
          this.notifyToast(this.$t('Registered successfully! Congratulations!'), 'success').then(() => {
            if(this.user.role == 0){
              this.$router.push({ name: `student-dashboard___${this.selectedLanguage.code}` })
            } 
            // if (this.user.role == 1) {
            //   this.$router.push({ name: `teacher-dashboard___${this.selectedLanguage.code}` })
            // } 
            // if (this.user.role == 2) {
            //   this.$router.push({ name: `admin-dashboard___${this.selectedLanguage.code}` })
            // }
          })
          
        })
        .catch(() => {
          this.notifyToast(this.$t('Server Error! Please try again or try another phone number!'), 'error')
        })
      } else {
        this.notifyToast(this.$t('Validation error! Please check the registration fields filled correctly!'), 'error')
      } 
    },
    flag(locale) {
      return locale === 'en' ? 'us' : locale
    }
  }
}
</script>
