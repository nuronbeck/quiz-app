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
        :subtitle="$t('Recover your account password')"
        header-class="text-center"
        class="navbar-shadow">

        <b-alert
          variant="soft-warning" 
          show
          class="d-flex flex-wrap">
          <div class="mr-8pt">
            <i class="material-icons">check_circle</i>
          </div>
          <div 
            class="flex" 
            style="min-width: 180px">
            <small 
              class="text-black-100"
              v-text="$t('An email with password reset instructions has been sent to your email address, if it exists on our system.')" />
          </div>
        </b-alert>

        <b-form 
          :action="localePath('student-dashboard')" 
          novalidate 
          method="get">
          
          <b-form-group
            :label="`${$t('Your email address')}:`"
            :description="$t('We will email you with info on how to reset your password.')"
            label-for="email"
            label-class="form-label">
            <fmv-input-group-merge
              id="email"
              :placeholder="$t('Your email address')"
              type="email"
              required
              prepend>
              <span class="fas fa-envelope" />
            </fmv-input-group-merge>
          </b-form-group>

          <b-btn 
            type="submit" 
            variant="primary"
            block
            v-text="$t('Send instructions')" />
        </b-form>

        <div 
          slot="footer" 
          class="text-center text-black-50">
          {{ $t('Remember your password?') }} 
          <b-link
            :to="localePath('login')"
            v-text="$t('Login')" />
        </div>
      </card>

    </div>
  </div>  
</template>

<i18n locale="ro">
  {
    "Recover your account password": "Recuperează parola contului tău",
    "An email with password reset instructions has been sent to your email address, if it exists on our system.": "Verifică-ți email-ul pentru instrucțiunile de resetare a parolei.",
    "Your email address": "Adresa ta de email",
    "We will email you with info on how to reset your password.": "Îți vom trimite pe email instrucțiunile de resetare a parolei.",
    "Send instructions": "Trimite instrucțiuni",
    "Remember your password?": "Ți-ai amintit parola?",
    "Forgot Password?": "Ai uitat parola?"
  }
</i18n>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      title: 'Forgot Password?'
    }
  },
  async asyncData() {
    return {
      title: 'Forgot Password?'
    }
  }
}
</script>
