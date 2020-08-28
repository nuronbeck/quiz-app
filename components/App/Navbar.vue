<template>
  <b-navbar 
    id="default-navbar"
    :class="navbarClass"
    :type="navbarConfigValue('type')"
    :variant="navbarConfigValue('variant')">
    <div 
      :class="navbarContainerClass">

      <!-- Toggle sidebar -->
      <button
        v-fmv-toggle.default-drawer 
        class="navbar-toggler w-auto mr-16pt d-block rounded-0"
        :class="navbarToggleClass" 
        type="button">
        <md-icon>short_text</md-icon>
      </button>

      <!-- Brand -->
      <b-navbar-brand 
        :to="localePath('/')"
        :class="navbarBrandClass">
        <fmv-avatar
          :title="true"
          title-class="bg-primary"
          size="sm"
          no-link
          class="navbar-brand-icon mr-0 mr-lg-8pt">
          <b-img 
            :src="brandImage" 
            class="img-fluid"
            width="40" 
            :alt="$store.state.brand" />
        </fmv-avatar>
        <span 
          class="d-none d-lg-block"
          v-text="$store.state.brand" />
      </b-navbar-brand>

      <template 
        v-if="!guest && navbarStats">
        <span
          v-if="!isInstructor"
          class="d-none d-md-flex align-items-center mr-16pt">
          <fmv-avatar
            :title="true"
            title-class="navbar-avatar"
            size="sm"
            class="mr-12pt">
            <md-icon>opacity</md-icon>
          </fmv-avatar>
          <small class="flex d-flex flex-column">
            <strong class="navbar-text-100">Experience IQ</strong>
            <span class="navbar-text-50">2,300 points</span>
          </small>
        </span>
        <template v-else>
          <span class="d-none d-md-flex align-items-center mr-16pt">
            <fmv-avatar
              :title="true"
              title-class="navbar-avatar"
              size="sm"
              class="mr-12pt">
              <md-icon>trending_up</md-icon>
            </fmv-avatar>
            <small class="flex d-flex flex-column">
              <strong 
                class="navbar-text-100"
                v-text="$t('Earnings')" />
              <span class="navbar-text-50">&dollar;12.3k</span>
            </small>
          </span>
          <span class="d-none d-md-flex align-items-center mr-16pt">
            <fmv-avatar
              :title="true"
              title-class="navbar-avatar"
              size="sm"
              class="mr-12pt">
              <md-icon>receipt</md-icon>
            </fmv-avatar>
            <small class="flex d-flex flex-column">
              <strong 
                class="navbar-text-100"
                v-text="$t('Sales')" />
              <span class="navbar-text-50">264</span>
            </small>
          </span>
        </template>
      </template>

      <b-navbar-nav
        v-if="guest" 
        class="d-none d-sm-flex flex justify-content-start ml-8pt">
        <!-- <b-nav-item :to="localePath('student-home')">{{ $t('Home') }}</b-nav-item> -->
        <b-nav-item :to="localePath('/')">{{ $t('Home') }}</b-nav-item>
        <b-nav-item-dropdown
          :text="$t('Courses')"
          no-caret>
          <b-dropdown-item :to="localePath('student-courses')">{{ $t('Browse Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-course')">{{ $t('Preview Course') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-lesson')">{{ $t('Preview Lesson') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-take-course')">
            <span class="mr-16pt">{{ $t('Take Course') }}</span>
            <b-badge 
              variant="accent badge-notifications"
              class="text-uppercase ml-auto"
              v-text="$t('Pro')" />
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('student-take-lesson')">{{ $t('Take Lesson') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-take-quiz')">{{ $t('Take Quiz') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-quiz-result')">{{ $t('Quiz Result') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-dashboard')">{{ $t('Student Dashboard') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-my-courses')">{{ $t('My Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-my-quizzes')">{{ $t('My Quizzes') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          :text="$t('Paths')"
          no-caret>
          <b-dropdown-item :to="localePath('student-paths')">{{ $t('Browse Paths') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-path')">{{ $t('Path Details') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-skill-assessment')">{{ $t('Skill Assessment') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-skill-result')">{{ $t('Skill Result') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('student-my-paths')">{{ $t('My Paths') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('pricing')">{{ $t('Pricing') }}</b-nav-item>
        <b-nav-item-dropdown
          :text="$t('Instructor')"
          no-caret>
          <b-dropdown-item :to="localePath('instructor-dashboard')">{{ $t('Instructor Dashboard') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-courses')">{{ $t('Manage Courses') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-quizzes')">{{ $t('Manage Quizzes') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-earnings')">{{ $t('Earnings') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-statement')">{{ $t('Statement') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-edit-course')">{{ $t('Edit Course') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('instructor-edit-quiz')">{{ $t('Edit Quiz') }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          v-b-tooltip.hover.bottom="{ title: $t('Community') }" 
          no-caret
          right>
          <template slot="button-content">
            <md-icon>people_outline</md-icon>
          </template>
          <b-dropdown-item :to="localePath('community-teachers')">{{ $t('Browse Teachers') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-student-profile')">{{ $t('Student Profile') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-instructor-profile')">{{ $t('Instructor Profile') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-blog')">{{ $t('Blog') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-blog-post')">{{ $t('Blog Post') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-faq')">{{ $t('FAQ') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-help-center')">{{ $t('Help Center') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-discussions')">{{ $t('Discussions') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-discussion')">{{ $t('Discussion Details') }}</b-dropdown-item>
          <b-dropdown-item :to="localePath('community-discussions-ask')">{{ $t('Ask Question') }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      
      <!-- Search -->
      <b-form
        v-if="false && navbarSearch" 
        class="search-form navbar-search d-none mr-16pt"
        :class="{ 
          'd-lg-flex': guest,
          'd-md-flex': !guest
        }">
        <b-button variant="none">
          <md-icon>search</md-icon>
        </b-button>
        <b-form-input
          :placeholder="$t('Search')"
          type="text" />
      </b-form>
      <!-- // END Search -->

      <!-- <div class="flex" /> -->
      
      <!-- Menu --> 
      <!-- <b-navbar-nav class="d-none d-lg-flex">
        <b-nav-item :to="localePath('forum')">{{ $t('Forum') }}</b-nav-item>
        <b-nav-item :to="localePath('help')">{{ $t('Get Help') }}</b-nav-item>
      </b-navbar-nav> -->
      
      <!-- Menu -->
      <b-navbar-nav class="flex-nowrap d-flex ml-auto">

        <!-- Shopping cart -->
        <!-- <b-nav-item
          :to="localePath('cart')" 
          class="d-none d-sm-flex">
          <md-icon>shopping_cart</md-icon>
        </b-nav-item> -->

        <template 
          v-if="!hasToken">
          <b-nav-item
            v-b-tooltip.hover.bottom="{ title: $t('Login') }" 
            :to="localePath('login')">
            <md-icon>lock_open</md-icon>
          </b-nav-item>
          <li 
            class="nav-item">
            <b-btn
              :to="localePath('signup')" 
              :variant="ctaClass"
              v-text="$t('Sign Up')" />
          </li>
        </template>

        <!-- Messages -->
        <navbar-notifications
          v-if="!guest && false"
          icon="mail_outline"
          icon-class="icon-24pt"
          title="Messages"
          :notifications="messages" />
        
        <!-- Notifications -->
        <navbar-notifications
          v-if="!guest && false"
          :badge="true"
          :notifications="notifications" />

        <!-- Localization -->
        <b-nav-item-dropdown
          v-b-tooltip.hover.bottom="{ title: $t($i18n.locale) }" 
          no-caret
          right>
          <template slot="button-content">
            <fmv-avatar 
              :src="require(`~/node_modules/svg-country-flags/svg/${flag($i18n.locale)}.svg`)" 
              :alt="$i18n.locale"
              size="xs"
              circle
              no-link />
          </template>
          <b-dropdown-item
            v-for="locale in locales"
            :key="`locale-${locale.code}`" 
            :to="switchLocalePath(locale.code)">
            {{ $t(locale.code) }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- User Dropdown -->
        <b-nav-item-dropdown
          v-if="hasToken"
          v-b-tooltip.hover.bottom="{ title: $t('Account') }"
          right>
          <template slot="button-content">
            <fmv-avatar 
              :title="true"
              title-class="bg-primary"
              size="sm" 
              circle
              no-link>
              <md-icon>account_box</md-icon>
            </fmv-avatar>
          </template>
          <b-dropdown-header 
            tag="div"
            class="form-label">
            {{ $t('Manage') }}
          </b-dropdown-header>
          <b-dropdown-item v-if="user">
            <span :style="{ fontWeight: 'bold' }">
              {{ user.phone }}
            </span>
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('account-edit-basic')">
            {{ $t('Edit Account') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('account-edit-profile')">
            {{ $t('Profile & Privacy') }}
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item :to="localePath('community-student-profile')">
            <md-icon>person</md-icon> {{ $t('Public Profile') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('login')">
            <md-icon>lock</md-icon> {{ $t('Logout') }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- // END User dropdown -->

      </b-navbar-nav>
      <!-- // END Menu -->

    </div>
  </b-navbar>
</template>

<i18n locale="en">
  {
    "notifications": {
      "profile_sync_error": "Your profile information has not been synced correctly.",
      "user_wants_to_join": "<strong>{user}</strong> wants to join you.",
      "deploy_success": "Your deploy was successful."
    }
  }
</i18n>

<i18n locale="ru">
  {
    "Earnings": "Заработки",
    "Sales": "Продажи",
    "notifications": {
      "profile_sync_error": "Ошибка при синхронизации данных профиля",
      "user_wants_to_join": "<strong>{user}</strong> хочет присоединиться.",
      "deploy_success": "Разворачивание прошла успешно."
    },
    "System notifications": "Системные уведомления",
    "Messages": "Сообщения"
  }
</i18n>

<i18n locale="uz">
  {
    "Earnings": "Daromadlar",
    "Sales": "Sotilishlar",
    "notifications": {
      "profile_sync_error": "Profil ma'lumotlari sinxronlanishida xatolik.",
      "user_wants_to_join": "<strong>{user}</strong> sizga qo'shilmoqchi.",
      "deploy_success": "Sizning joylashuvtiruvingiz muvaffaqiyatli amalga oshirildi."
    },
    "System notifications": "Tizim xabarnomalari",
    "Messages": "Xabarnomalar"
  }
</i18n>

<script>
  import { locales } from '~/config/i18n'
  import NavbarNotifications from '~/components/App/Navbar/Notifications'
  import navbarConfigMixin from '~/mixins/navbar-config'
  import layoutConfigMixin from '~/mixins/layout-config'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      NavbarNotifications
    },
    mixins: [
      navbarConfigMixin,
      layoutConfigMixin
    ],
    props: {
      guest: {
        type: Boolean
      },
      navbarClass: {
        type: String,
        default: ''
      },
      navbarToggleClass: {
        type: String,
        default: null
      },
      navbarBrandClass: {
        type: String,
        default: null
      },
      navbarSearch: {
        type: Boolean,
        default: true
      },
      navbarStats: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        locales,
        notifications: [
          {
            id: 1,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.min', 3, { value: 3 })
            }),
            iconClass: 'text-danger',
            icon: 'account_circle',
            message: this.$t('notifications.profile_sync_error'),
            unread: true
          },
          {
            id: 2,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.hr', 5, { value: 5 })
            }),
            iconClass: 'text-success',
            icon: 'group_add',
            message: this.$t('notifications.user_wants_to_join', {
              user: 'Adrian. D'
            }),
            unread: true
          },
          {
            id: 3,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.day', 1, { value: 1 })
            }),
            iconClass: 'text-warning',
            icon: 'storage',
            message: this.$t('notifications.deploy_success')
          }
        ],
        messages: [
          {
            id: 1,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.min', 3, { value: 3 })
            }),
            iconClass: 'text-danger',
            avatar: '/images/people/110/woman-5.jpg',
            name: 'Michelle',
            message: 'Clients loved the new design.',
            unread: true
          },
          {
            id: 2,
            created_at: this.$t('diff_for_humans', {
              when: this.$tc('datetime_units.hr', 5, { value: 5 })
            }),
            iconClass: 'text-success',
            avatar: '/images/people/110/woman-5.jpg',
            name: 'Michelle',
            message: '🔥 Superb job..'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        hasToken: 'user/hasToken',
        user: 'user/user'
      }),
      isInstructor() {
        return this.$nuxt.$route.path.indexOf('instructor') !== -1
      },
      ctaClass() {
        return this.navbarConfigValue('type').indexOf('dark') !== -1 ? 'outline-white' : 'outline-dark'
      },
      brandImage() {
        const image = this.isInstructor ? 'teacher' : 'student'
        const color = this.navbarConfigValue('type').indexOf('dark') !== -1 ? 'white' : 'black'
        return `/images/illustration/${image}/128/${color}.svg`
      },
      navbarConfigKey() {
        try {
          return this.$store.getters.settings[`${this.$root.layoutName}::mainNavbar`].navbar
        } catch(e) {}
      }
    },
    methods: {
      flag(locale) {
        return locale === 'en' ? 'us' : locale
      }
    }
  }
</script>
