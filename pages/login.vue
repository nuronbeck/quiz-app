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
        :subtitle="$t('Access your account')"
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
          :validated="loginSubmitted"
          method="post"
        >
          <div v-if="loginError !== ''" class="alert alert-danger text-center" role="alert">
            Username or password incorrect!
          </div>
          <b-form-group
            :label="`${$t('Your phone number')}:`"
            :state="!$v.loginData.phone.$invalid"
            label-for="phone"
            label-class="form-label"
            invalid-feedback="*Fill phone number and make sure used right credentials!"
          >
            <fmv-input-group-merge
              id="phone"
              :placeholder="$t('Your phone number')"
              type="text"
              required
              prepend
              name="phone"
              v-model="loginData.phone"
              :state="!$v.loginData.phone.$invalid"
            >
              <span class="fas fa-phone" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('Your password')}:`"
            :state="!$v.loginData.password.$invalid"
            label-for="password"
            label-class="form-label"
            invalid-feedback="*Fill password and male sure used right credentials!"
          >
            <fmv-input-group-merge
              id="password"
              :placeholder="$t('Your password')"
              type="password"
              class="form-control-prepended"
              required
              prepend
              v-model="loginData.password"
              :state="!$v.loginData.password.$invalid"
            >
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Login')"
              @click.prevent="LoginSubmit"
            />
          </div>

          <div class="text-center">
            <b-link
              :to="localePath('forgot-password')"
              class="text-black-70" 
              style="text-decoration: underline;"
              v-text="$t('Forgot Password?')" />
          </div>
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Not yet a student?') }} 
          <b-link
            :to="localePath('signup')"
            v-text="$t('Sign up')" />
        </div>
      </card>

    </div>
  </div>
</template>


<i18n locale="ru">
  {
    "Login error! Please check data or try again.": "Ошибка авторизации! Проверьте данные или попробуйте позже.",
    "Continue with Google": "Войти с помощью Google",
    "or": "или",
    "Your phone number": "Номер телефона",
    "Your password": "Пароль",
    "Have an account?": "У вас уже есть аккаунт?",
    "Access your account": "Доступ к вашему аккаунту",
    "Not yet a student?": "Еще не студент?",
    "Sign up": "Зарегистрироваться",
    "Forgot Password?": "Забыли пароль?"
  }
</i18n>

<i18n locale="uz">
  {
    "Login error! Please check data or try again.": "Kirish o'xshamadi! Ma'lumotlaringizni tekshiring yoki keyinroq urinib ko'ring.",
    "Continue with Google": "Google orqali kirish",
    "or": "yoki",
    "Your phone number": "Telefon raqamingiz",
    "Your password": "Parolingiz",
    "Have an account?": "Akkauntingiz bormi?",
    "Access your account": "Akkauntingizga kirish huquqi",
    "Not yet a student?": "Hali ham student emasmisiz?",
    "Sign up": "Ro'yxatdan o'tish",
    "Forgot Password?": "Parolni unutdingizmi?"
  }
</i18n>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import sweetalert from '~/mixins/sweetalert'

export default {
  layout: 'blank',
  mixins: [
    sweetalert
  ],
  mounted() {
    this.loginData.phone = '777777777'
    this.loginData.password = '123456789'
  },
  data() {
    return {
      title: 'Login',
      loginError: '',
      loginData: {
        phone: '',
        password: ''
      }
    }
  },
  validations: {
    loginData: {
      phone: {
        required,
        //phoneValidator: (phone) => /^\+[0-9]?[0-9](\d[0-9]{9})$/gm.test(phone)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    LoginSubmit(){
      this.$v.$touch()

      if(!this.$v.$invalid) {
        this.notifyToast(this.$t('Login error! Please check data or try again.'), 'error')
      } else {
        this.notifyToast(this.$t('Login error! Please check data or try again.'), 'error')
      }

    }
  },
  async asyncData() {
    return {
      title: 'Login'
    }
  }
}
</script>
