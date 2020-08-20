<template>
  <landing-page>
    <template v-slot:header-content>
      <div
        class="d-flex flex-column align-items-center justify-content-center mb-24pt">
        <fmv-avatar
          :title="true"
          title-class="bg-dark"
          size="xl"
          no-link
          class="mb-16pt">
          <b-img 
            src="/images/Vue.js_Logo_2.svg"
            class="img-fluid" 
            :alt="title" />
        </fmv-avatar>

        <h1 
          class="text-white text-shadow mb-0"
          v-text="title" />
      </div>

      <!-- <p class="text-white text-shadow measure-lead lead mx-auto">Luma is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p> -->

      <p class="text-white text-shadow text-headings font-weight-normal measure-paragraph mx-auto">Aside the fact it's built entirely with Vue.js and Bootstrap Vue, Luma Vue is stacked on Nuxt.js - The Vue.js Framework. Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.</p>

      <b-btn-group
        class="btn--raised">
        <b-btn 
          :to="localePath('/student/home')" 
          target="_blank" 
          size="lg"
          variant="white"
          class="btn-rounded"
          v-text="$t('Vue Demo')" />
        <b-btn
          v-if="buyURL"
          v-b-tooltip.hover.bottom="{ title: buyURL.title }" 
          :href="buyURL.href" 
          size="lg"
          variant="light"
          class="btn-rounded"
          v-text="$t('Buy Now')" />
      </b-btn-group>
    </template>

    <div class="container-fluid page-section page__container bg-alt border-bottom-2">
      <div 
        class="mx-auto text-center" 
        style="max-width: 850px;">

        <page-separator 
          title="Vue & Nuxt Learning Management System"
          center
          class="mb-8pt" />

        <p class="measure-lead-max mx-auto mb-24pt">{{ title }} is a beautifully crafted user interface for modern Education Platforms built in Vue.js and Nuxt. It includes Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>

        <div 
          class="mx-auto"
          style="max-width: 590px;">
          <landing-demo-link
            class="rounded position-relative o-hidden" 
            :item="{
              src: '/images/preview/01_luma_vue.png',
              alt: title,
              demo_url: buyURL ? buyURL.href : null,
              button: 'Buy Now'
            }" />
        </div>
      
      </div>
    </div>

    <div class="page-section page__container border-bottom-2">
      <div class="container mx-auto text-center">

        <page-headline
          title="Layouts"
          description="Luma Vue includes several layouts, available for any page in the package. <strong>RTL Ready</strong> with a simple switch in the application settings."
          center />

        <div class="row">
          <div
            v-for="(item, index) in layouts"
            :key="`layout-${index}`" 
            class="col-md-6 col-lg-3">

            <div
              style="max-width: 272px;"
              class="mx-auto mb-24pt mb-lg-0">
              <h4 
                class="card-title mb-8pt"
                v-text="item.title" />

              <div class="mb-16pt">
                <b-btn
                  :to="`${item.demo_url}#fm:layout.layout=${item.id}&layout.rtl=false`"
                  target="_blank"
                  variant="dark"
                  size="sm"
                  v-text="item.title" />
                <b-btn
                  :to="`${item.demo_url}#fm:layout.layout=${item.id}&layout.rtl=true`"
                  target="_blank"
                  variant="dark"
                  size="sm"
                  v-text="'RTL'" />
              </div>

              <landing-demo-link
                class="rounded position-relative o-hidden" 
                :item="{
                  src: item.src,
                  alt: item.title,
                  demo_url: `${item.demo_url}#fm:layout.layout=${item.id}&layout.rtl=false`
                }" />
            </div>

          </div>
        </div>
      
      </div>
    </div>

    <div class="container-fluid page-section page__container bg-alt border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 850px;">

        <landing-demo-card
          v-for="item in demos"
          :key="item.id"
          :item="item" />

      </div>
    </div>

  </landing-page>
</template>

<script>
import Page from '~/components/App/Page'
import LandingPage from '~/components/Landing/LandingPage'
import LandingDemoCard from '~/components/Landing/LandingDemoCard'
import LandingDemoLink from '~/components/Landing/LandingDemoLink'

export default {
  layout: 'blank',
  components: {
    LandingPage,
    LandingDemoCard,
    LandingDemoLink
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Luma Vue Nuxt'),
      buyURL: null,
      docsURL: null,
      demos: [

        // GUEST DEMO 1
        {
          id: 'guest',
          title: 'Guest Demo',
          cols: [{
            cols: [{
              items: [{
                title: 'Home',
                src: '/images/preview/vue/home.png',
                alt: `Home Page - ${this.title}`,
                demo_url: '/student/home'
              }]
            }, {
              items: [{
                title: 'Browse Courses',
                src: '/images/preview/vue/app-courses.png',
                alt: `Browse Courses - ${this.title}`,
                demo_url: '/student/courses'
              }, {
                title: 'Browse Paths',
                src: '/images/preview/vue/app-paths.png',
                alt: `Browse Paths - ${this.title}`,
                demo_url: '/student/paths'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Course Preview',
                src: '/images/preview/vue/app-course.png',
                alt: `Course Preview - ${this.title}`,
                demo_url: '/student/course'
              }]
            }, {
              items: [{
                title: 'Video Lesson',
                src: '/images/preview/vue/app-lesson.png',
                alt: `Video Lesson - ${this.title}`,
                demo_url: '/student/lesson'
              }, {
                title: 'Pricing',
                src: '/images/preview/vue/app-pricing.png',
                alt: `Pricing - ${this.title}`,
                demo_url: '/pricing'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Blog',
                src: '/images/preview/vue/app-blog.png',
                alt: `Blog - ${this.title}`,
                demo_url: '/community/blog-post'
              }]
            }, {
              items: [{
                title: 'Blog Post',
                src: '/images/preview/vue/app-blog-post.png',
                alt: `Blog Post - ${this.title}`,
                demo_url: '/community/blog'
              }]
            }]
          }]
        },

        // INSTRUCTOR DEMO
        {
          id: 'instructor',
          title: 'Instructor Demo',
          cols: [{
            cols: [{
              items: [{
                title: 'Instructor Dashboard',
                src: '/images/preview/vue/app-instructor-dashboard.png',
                alt: `Instructor Dashboard - ${this.title}`,
                demo_url: '/instructor/dashboard'
              }]
            }, {
              items: [{
                title: 'Manage Courses',
                src: '/images/preview/vue/app-manage-courses.png',
                alt: `Manage Courses - ${this.title}`,
                demo_url: '/instructor/courses'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Edit Course',
                src: '/images/preview/vue/app-edit-course.png',
                alt: `Edit Course - ${this.title}`,
                demo_url: '/instructor/edit-course'
              }]
            }, {
              items: [{
                title: 'Edit Quiz',
                src: '/images/preview/vue/app-edit-quiz.png',
                alt: `Edit Quiz - ${this.title}`,
                demo_url: '/instructor/edit-quiz'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Manage Quizzes',
                src: '/images/preview/vue/app-manage-quizzes.png',
                alt: `Manage Quizzes - ${this.title}`,
                demo_url: '/instructor/quizzes'
              }]
            }, {
              items: [{
                title: 'Instructor Profile',
                src: '/images/preview/vue/app-instructor-profile.png',
                alt: `Instructor Profile - ${this.title}`,
                demo_url: '/community/instructor-profile'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Statement',
                src: '/images/preview/vue/app-statement.png',
                alt: `Instructor Statement - ${this.title}`,
                demo_url: '/instructor/statement'
              }]
            }, {
              items: [{
                title: 'Earnings',
                src: '/images/preview/vue/app-earnings.png',
                alt: `Instructor Earnings - ${this.title}`,
                demo_url: '/instructor/earnings'
              }]
            }]
          }]
        },

        // STUDENT
        {
          id: 'student',
          title: 'Student Demo',
          cols: [{
            cols: [{
              items: [{
                title: 'Student Dashboard',
                src: '/images/preview/vue/app-student-dashboard.png',
                alt: `Student Dashboard - ${this.title}`,
                demo_url: '/student/dashboard'
              }, {
                title: 'My Learning Paths',
                src: '/images/preview/vue/app-my-paths.png',
                alt: `My Learning Paths - ${this.title}`,
                demo_url: '/student/paths'
              }]
            }, {
              items: [{
                title: 'My Courses',
                src: '/images/preview/vue/app-my-courses.png',
                alt: `My Courses - ${this.title}`,
                demo_url: '/student/my-courses'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Take Course',
                src: '/images/preview/vue/app-take-course.png',
                alt: `Take Course - ${this.title}`,
                demo_url: '/student/take-course'
              }]
            }, {
              items: [{
                title: 'Take Lesson',
                src: '/images/preview/vue/app-take-lesson.png',
                alt: `Take Video Lesson - ${this.title}`,
                demo_url: '/student/take-lesson'
              }, {
                title: 'Take Quiz',
                src: '/images/preview/vue/app-take-quiz.png',
                alt: `Take Quiz - ${this.title}`,
                demo_url: '/student/take-quiz'
              }, {
                title: 'Quiz Result Details',
                src: '/images/preview/vue/app-quiz-result.png',
                alt: `Quiz Result Details - ${this.title}`,
                demo_url: '/student/quiz-result'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Skill Assessment',
                src: '/images/preview/vue/app-skill-assessment.png',
                alt: `Skill Assessment - ${this.title}`,
                demo_url: '/student/skill-assessment'
              }, {
                title: 'Skill Result',
                src: '/images/preview/vue/app-skill-result.png',
                alt: `Skill Result - ${this.title}`,
                demo_url: '/student/skill-result'
              }]
            }, {
              items: [{
                title: 'Take Path',
                src: '/images/preview/vue/app-take-path.png',
                alt: `Take Path - ${this.title}`,
                demo_url: '/student/path'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'My Quizzes',
                src: '/images/preview/vue/app-my-quizzes.png',
                alt: `My Quizzes - ${this.title}`,
                demo_url: '/student/my-quizzes'
              }]
            }, {
              items: [{
                title: 'Student Profile',
                src: '/images/preview/vue/app-student-profile.png',
                alt: `Student Profile - ${this.title}`,
                demo_url: '/community/student-profile'
              }]
            }]
          }]
        },

        // AUTH
        {
          id: 'auth',
          title: 'Authentication',
          cols: [{
            class: 'col-lg-10',
            cols: [{
              items: [{
                title: 'Login',
                src: '/images/preview/vue/login.png',
                alt: `Login - ${this.title}`,
                demo_url: '/login'
              }]
            }, {
              items: [{
                title: 'Signup',
                src: '/images/preview/vue/signup.png',
                alt: `Signup - ${this.title}`,
                demo_url: '/signup'
              }]
            }, {
              items: [{
                title: 'Forgot Password',
                src: '/images/preview/vue/forgot-password.png',
                alt: `Forgot Password - ${this.title}`,
                demo_url: '/forgot-password'
              }]
            }]
          }]
        },

        // ACCOUNT
        {
          id: 'account',
          title: 'Account Management',
          cols: [{
            cols: [{
              items: [{
                title: 'Edit Account',
                src: '/images/preview/vue/app-edit-account.png',
                alt: `Edit Account - ${this.title}`,
                demo_url: '/account/edit/basic'
              }]
            }, {
              items: [{
                title: 'Edit Profile',
                src: '/images/preview/vue/app-edit-profile.png',
                alt: `Edit Profile - ${this.title}`,
                demo_url: '/account/edit/profile'
              }]
            }]
          }]
        },

        // BILLING
        {
          id: 'billing',
          title: 'Billing',
          cols: [{
            cols: [{
              items: [{
                title: 'Billing',
                src: '/images/preview/vue/app-subscription.png',
                alt: `Billing - ${this.title}`,
                demo_url: '/account/edit/subscription'
              }]
            }, {
              items: [{
                title: 'Upgrade Account',
                src: '/images/preview/vue/app-upgrade-account.png',
                alt: `Upgrade Account - ${this.title}`,
                demo_url: '/account/edit/upgrade'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Payment Information',
                src: '/images/preview/vue/app-payment-information.png',
                alt: `Payment Information - ${this.title}`,
                demo_url: '/account/edit/payment-information'
              }]
            }, {
              items: [{
                title: 'Payment History',
                src: '/images/preview/vue/app-payment-history.png',
                alt: `Payment History - ${this.title}`,
                demo_url: '/account/edit/payment-history'
              }]
            }]
          }, {
            row_class: 'justify-content-center',
            cols: [{
              class: 'col-sm-6',
              items: [{
                title: 'Invoice',
                src: '/images/preview/vue/app-invoice.png',
                alt: `Invoice - ${this.title}`,
                demo_url: '/account/invoice'
              }]
            }]
          }]
        },

        // MESSAGING
        {
          id: 'messaging',
          title: 'Messaging',
          cols: [{
            class: 'col-sm-4',
            cols: [{
              class: 'col',
              items: [{
                title: 'Messages',
                src: '/images/preview/vue/app-messages.png',
                alt: `Messages - ${this.title}`,
                demo_url: '/messages'
              }]
            }]
          }]
        }

      ],

      layouts: [{
        id: 'fixed',
        title: 'Fixed Layout',
        src: '/images/preview/fixed-layout.png',
        demo_url: '/student/home'
      }, {
        id: 'default',
        title: 'App Layout',
        src: '/images/preview/app-layout.png',
        demo_url: '/student/dashboard'
      }, {
        id: 'sticky',
        title: 'Sticky Layout',
        src: '/images/preview/sticky-layout.png',
        demo_url: '/student/courses'
      }, {
        id: 'boxed',
        title: 'Boxed Layout',
        src: '/images/preview/boxed-layout.png',
        demo_url: '/instructor/dashboard'
      }]
    }
  },
  watch: {
    buyURL() {
      this.$root.$emit('luma::setBuyURL', this.buyURL)
    },
    docsURL() {
      this.$root.$emit('luma::setDocsURL', this.docsURL)
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Luma Vue Nuxt')
    }
  },
  created() {
    this.buyURL = {
      href: 'https://themeforest.net/item/luma-vue-nuxtjs-vuejs-learning-management-system-admin-template/27042844',
      title: this.title
    }
    this.docsURL = {
      href: '/documentation',
      title: this.title
    }
  }
}
</script>
