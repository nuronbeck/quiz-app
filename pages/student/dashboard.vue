<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">

      <card :header-aside="true"
        :title="$t('Profile verification')"
        :subtitle="$t('Mobile phone hasn\'t verified')"
        footer-class="text-50"
      > 

        <p class="card-text">
          <b-alert show
            variant="danger" 
            class="border-0 text-danger p-4">
            {{ $t("Your account hasn't verified yet! Please verify to use QuizApp full functionality!") }}
          </b-alert>
        </p>

        <b-link @click="verifyMyAccount"
          exact
          class="btn btn-primary">
          {{ $t('Verify') }}
        </b-link> 
      </card>


      <page-separator v-if="false">{{ $t('Overview') }}</page-separator>

      <div class="row mb-lg-8pt" v-if="false">
        <div class="col-lg-6">
          <student-dashboard-topic-iq-chart />
        </div>
        <div class="col-lg-6">
          <student-dashboard-experience-iq-chart />
          <student-achievements-carousel />
        </div>
      </div>

      <div class="row mb-lg-16pt" v-if="false">
        <div class="col-lg-6 mb-8pt mb-sm-0">
          <page-separator>{{ $t('Learning Paths') }}</page-separator>
          <account-path-card
            v-for="item in paths"
            :key="item.id"
            :title="item.title"
            :image="item.image"
            :favorite="item.favorite" />
        </div>
        <div class="col-lg-6">
          <page-separator>{{ $t('Courses') }}</page-separator>
          <courses-carousel
            col-class="col-sm-6"
            :account="true" />
        </div>
      </div>

      <student-dashboard-discussions v-if="false" />
    </div>
  </div>
</template>

<i18n locale="ru">
  {
    "Please enter the code": "Пожалуйста, подтвердите код",
    "Submit": "Подтвердить",
    "Cancel": "Отмена",
    "Request failed": "Запрос не выполнен",
    "Your account successfully verified!": "Ваш профиль успешно верифицирован!",
    "Account verification": "Верификация аккаунта",
    "Sending verification code..": "Отправка кода верификации..",
    "Development Courses": "Курсы развития",
    "Design Courses": "Курсы дизайна",
    "Profile verification": "Верификация профиля",
    "Mobile phone hasn't verified": "Номер телефона еще не подтвержден!",
    "Verify": "Верифицировать",
    "Your account hasn't verified yet! Please verify to use QuizApp full functionality!": "Ваш аккаунт еще не подтвержден! Пожалуйста, подтвердите для полного использования функциональностей QuizApp!"
  }
</i18n>

<i18n locale="uz">
  {
    "Please enter the code": "Iltimos, tasdiqlash kodini kiriting",
    "Submit": "Tasdiqlash",
    "Cancel": "Bekor qilish",
    "Request failed": "So'rov bajarilmadi",
    "Your account successfully verified!": "Sizning profilingiz muvaffaqiyatli tasdiqlandi!",
    "Account verification": "Akkauntni tasdiqlash",
    "Sending verification code..": "Tasdiqlash kodi yuborilmoqda..",
    "Development Courses": "Rivojlantirish kurslari",
    "Design Courses": "Dizayn kurslari",
    "Profile verification": "Profil verifikatsiyasi",
    "Mobile phone hasn't verified": "Telefon raqam hali tasdiqlanmagan!",
    "Verify": "Tasdiqlash",
    "Your account hasn't verified yet! Please verify to use QuizApp full functionality!": "Akkauntingiz hali tasdiqlanmagan! Iltimos, QuizApp-ning to'liq funksiyasidan foydalanish uchun verifikatsiyadan o'ting!"
  }
</i18n>

<script>
import Page from '~/components/App/Page'
import StudentDashboardTopicIqChart from '~/components/App/Student/Dashboard/TopicIqChart'
import StudentDashboardExperienceIqChart from '~/components/App/Student/Dashboard/ExperienceIqChart'
import StudentDashboardDiscussions from '~/components/App/Student/Dashboard/Discussions'
import StudentAchievementsCarousel from '~/components/App/Student/Dashboard/AchievementsCarousel'

import AccountPathCard from '~/components/App/AccountPathCard'
import CoursesCarousel from '~/components/App/CoursesCarousel'

import { mapGetters } from 'vuex'
import sweetalert from '~/mixins/sweetalert'

export default {
  middleware: [ 'auth' ],
  name: 'StudentDashboard',
  components: {
    StudentDashboardTopicIqChart,
    StudentDashboardExperienceIqChart,
    StudentDashboardDiscussions,
    StudentAchievementsCarousel,

    AccountPathCard,
    CoursesCarousel,
  },
  mixins: [
    sweetalert
  ],
  extends: Page, 
  data () {
    return {
      title: this.$t('Dashboard'),
      paths: [{
        title: 'Angular',
        image: 'angular'
      }, {
        title: 'Swift', 
        image: 'swift', 
        favorite: true
      }, {
        title: 'React Native', 
        image: 'react', 
        position: 'left'
      }]
    }
  },
  methods: {
    verifyMyAccount(){
      this.verifyUserAccount(
        this.$t('Account verification'),
        this.$t('Sending verification code..'),
        this.$t('Please enter the code'),
        this.$t('Submit'),
        this.$t('Cancel'),
        this.$t('Your account successfully verified!'),
        this.$t('Request failed')
      )
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Dashboard')
    }
  }
}
</script>
