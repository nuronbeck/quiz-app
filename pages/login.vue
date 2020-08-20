<template>
  <div 
    class="d-flex align-items-center" 
    style="min-height: 100vh">
    <div 
      class="col-sm-8 col-md-6 col-lg-4 mx-auto"
      style="min-width: 300px;">
      <div class="text-center mt-5 mb-1">
        <fmv-avatar
          :to="localePath('student-dashboard')"
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
          :to="localePath('student-dashboard')"
          class="navbar-brand m-0"
          v-text="$store.state.brand" />
      </div>
      <card 
        :title="$t(title)"
        :subtitle="$t('Access your account')"
        header-class="text-center"
        class="navbar-shadow">

        <b-btn 
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
          center />

        <b-form 
          :action="localePath('student-dashboard')" 
          novalidate 
          method="get">
          
          <b-form-group
            :label="`${$t('Your phone number')}:`"
            label-for="phone"
            label-class="form-label">
            <fmv-input-group-merge
              id="phone"
              :placeholder="$t('Your phone number')"
              type="text"
              required
              prepend>
              <span class="fas fa-phone" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-form-group
            :label="`${$t('Your password')}:`"
            label-for="password"
            label-class="form-label">
            <fmv-input-group-merge
              id="password"
              :placeholder="$t('Your password')"
              type="password"
              class="form-control-prepended"
              required
              prepend>
              <span class="fas fa-key" />
            </fmv-input-group-merge>
          </b-form-group>

          <div class="form-group">
            <b-btn 
              type="submit" 
              variant="primary"
              block
              v-text="$t('Login')" />
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

<i18n locale="ro">
  {
    "Continue with Google": "Continuă cu Google",
    "or": "sau",
    "Your phone number": "Adresa ta de phone",
    "Your password": "Parola ta",
    "Have an account?": "Ai deja un cont?",
    "Access your account": "Accesează contul tău",
    "Not yet a student?": "Încă nu ai cont de student?",
    "Sign up": "Înscrie-te",
    "Forgot Password?": "Ai uitat parola?"
  }
</i18n>

<i18n locale="ru">
  {
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
export default {
  layout: 'blank',
  data() {
    return {
      title: 'Login'
    }
  },
  async asyncData() {
    return {
      title: 'Login'
    }
  }
}
</script>
