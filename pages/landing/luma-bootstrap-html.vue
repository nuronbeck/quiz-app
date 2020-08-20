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
            src="/images/logo/bootstrap.svg"
            class="img-fluid" 
            :alt="title" />
        </fmv-avatar>

        <h1 
          class="text-white text-shadow mb-0"
          v-text="title" />
      </div>

      <p class="text-white text-shadow text-headings font-weight-normal measure-paragraph mx-auto">Luma Bootstrap is built entirely with HTML5 and Bootstrap v4.5.0. It includes over 600 HTML files, pre-compiled CSS and JavaScript but also the source SCSS and JavaScript files ready to be added in your webpack (or gulp) workflow.</p>

      <b-btn-group
        class="btn--raised">
        <b-btn 
          :href="demoURL"
          target="_blank" 
          size="lg"
          variant="white"
          class="btn-rounded">
          <span class="d-none d-sm-inline-block">Bootstrap</span> Demo
        </b-btn>
        <b-btn
          v-if="buyURL"
          v-b-tooltip.hover.bottom="{ title: buyURL.title }" 
          :href="buyURL.href" 
          size="lg"
          variant="light"
          class="btn-rounded"
          v-text="'Buy Now'" />
      </b-btn-group>
    </template>

    <div class="container-fluid page-section page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Learning Management System"
              class="mb-8pt" />

            <p><small>Luma is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</small></p>
            <img 
              src="/images/preview/intro/course-card.png" 
              class="img-fluid-max" 
              alt="Learning App - Course">
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/home.png',
                alt: 'Luma Education Platform - Home Page',
                demo_url: 'http://luma.humatheme.com/index.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 850px;">

        <landing-demo-card
          v-for="item in demos"
          :key="item.id"
          :item="item" />

      </div>
    </div>

    <div 
      id="layouts" 
      class="container-fluid page-section bg-alt page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="App layout"
              class="mb-8pt" />

            <p><small>Display a full-width sidebar navigation suitable for authenticated members.</small></p>
            <img 
              src="/images/preview/intro/app-2.png" 
              class="img-fluid-max" 
              alt="Luma Education Platform - App Layout">
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/app.png',
                alt: 'Luma Learning Management System - My Courses',
                demo_url: 'http://luma.humatheme.com/student-my-courses.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Guest layout"
              class="mb-8pt" />

            <p><small>Display a top main navigation navbar and centered top-to-bottom content flow, suitable for presenting content and landing pages.</small></p>
            <img 
              src="/images/preview/intro/courses.png" 
              class="img-fluid-max" 
              alt="Luma LMS - Guest Layout">
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/blog.png',
                alt: 'Luma Education Platform - Blog',
                demo_url: 'http://luma.humatheme.com/fixed-blog.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section bg-alt page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Boxed layout"
              class="mb-16pt" />
            <img 
              src="/images/preview/intro/boxed-home.png" 
              class="img-fluid-max" 
              alt="Luma Admin Template - Boxed Layout">
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/boxed-courses.png',
                alt: 'Luma Education App - Browse Courses - Boxed Layout',
                demo_url: 'http://luma.humatheme.com/boxed-courses.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Compact layout"
              class="mb-8pt" />

            <p><small>Display a smaller-width main sidebar navigation with stacked icons and text and an optional secondary full-width sidebar on demand.</small></p>
            <img 
              src="/images/preview/intro/compact-layout.png" 
              class="img-fluid-max" 
              alt="Luma Admin Template - Compact Layout">
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/compact-instructor-profile.png',
                alt: 'Luma Education Platform - Instructor Profile',
                demo_url: 'http://luma.humatheme.com/compact-teacher-profile.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section bg-alt page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Sticky layout"
              class="mb-8pt" />

            <p class="mb-0"><small>Display a full-width sidebar navigation and a sticky top navbar menu.</small></p>
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/sticky-student-dashboard.png',
                alt: 'Luma LMS - Student Dashboard',
                demo_url: 'http://luma.humatheme.com/sticky-student-dashboard.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section page__container border-bottom-2">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Mini secondary layout"
              class="mb-8pt" />

            <p class="mb-0"><small>Display a secondary full width sidebar menu along-side the main smaller width icon-only sidebar, visible on desktop by default.</small></p>
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/mini-secondary-paths.png',
                alt: 'Luma Admin Template - Mini Secondary Layout',
                demo_url: 'http://luma.humatheme.com/mini-secondary-paths.html'
              }" />
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid page-section bg-alt page__container">
      <div 
        class="mx-auto" 
        style="max-width: 616px;">
        
        <div class="row align-items-center">
          <div class="col-sm mb-24pt mb-sm-0">
            <page-separator 
              title="Mini layout"
              class="mb-8pt" />

            <p class="mb-0"><small>Display a smaller width icon-only sidebar menu as the primary navigation and an optional secondary full-width sidebar menu on demand.</small></p>
          </div>
          <div class="col-sm">
            <landing-demo-link 
              :item="{
                src: '/images/preview/intro/mini-take-quiz.png',
                alt: 'Luma Education Platform - Take Quiz - Mini Layout',
                demo_url: 'http://luma.humatheme.com/mini-student-take-quiz.html'
              }" />
          </div>
        </div>

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
      title: this.$t('Luma Bootstrap'),
      buyURL: null,
      docsURL: null,
      demoURL: 'http://luma.humatheme.com/index.html',
      demos: [

        // GUEST DEMO 1
        {
          id: 'guest',
          title: 'Guest - Demo 1',
          cols: [{
            cols: [{
              items: [{
                title: 'Home',
                src: '/images/preview/home.png',
                alt: 'Luma Learning Management System - Home Page',
                demo_url: 'http://luma.humatheme.com/index.html'
              }]
            }, {
              items: [{
                title: 'Browse Courses',
                src: '/images/preview/courses.png',
                alt: 'Luma Education Platform - Browse Courses',
                demo_url: 'http://luma.humatheme.com/fixed-courses.html'
              }, {
                title: 'Browse Paths',
                src: '/images/preview/paths.png',
                alt: 'Luma LMS Template - Browse Learning Paths',
                demo_url: 'http://luma.humatheme.com/fixed-paths.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Course Preview',
                src: '/images/preview/course.png',
                alt: 'Luma Education Platform - Course Preview',
                demo_url: 'http://luma.humatheme.com/fixed-student-course.html'
              }]
            }, {
              items: [{
                title: 'Video Lesson',
                src: '/images/preview/lesson.png',
                alt: 'Luma Learning Management System - Video Lesson',
                demo_url: 'http://luma.humatheme.com/fixed-student-lesson.html'
              }, {
                title: 'Path Details',
                src: '/images/preview/path.png',
                alt: 'Luma LMS Template - Learning Path Details',
                demo_url: 'http://luma.humatheme.com/student-path.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Blog',
                src: '/images/preview/blog.png',
                alt: 'Luma Education Platform - Blog',
                demo_url: 'http://luma.humatheme.com/fixed-blog.html'
              }]
            }, {
              items: [{
                title: 'Pricing',
                src: '/images/preview/pricing.png',
                alt: 'Luma Learning Management System - Pricing',
                demo_url: 'http://luma.humatheme.com/fixed-pricing.html'
              }]
            }]
          }]
        },

        // GUEST DEMO 2
        {
          id: 'guest-2',
          title: 'Guest - Demo 2',
          cols: [{
            cols: [{
              items: [{
                title: 'Home 2',
                src: '/images/preview/learnly-home.png',
                alt: 'Luma Learning Management System - Home Page - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-index.html'
              }]
            }, {
              items: [{
                title: 'Courses 2',
                src: '/images/preview/learnly-courses.png',
                alt: 'Luma Education Platform - Browse Courses - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-courses.html'
              }, {
                title: 'Browse Paths 2',
                src: '/images/preview/learnly-paths.png',
                alt: 'Luma LMS Template - Browse Learning Paths - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-paths.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Course 2',
                src: '/images/preview/learnly-course.png',
                alt: 'Luma Education Platform - Course Preview - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-course.html'
              }]
            }, {
              items: [{
                title: 'Video Lesson 2',
                src: '/images/preview/learnly-lesson.png',
                alt: 'Luma Learning Management System - Video Lesson - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-lesson.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Path Details 2',
                src: '/images/preview/learnly-path.png',
                alt: 'Luma LMS Template - Learning Path Details - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-path.html'
              }]
            }, {
              items: [{
                title: 'Pricing 2',
                src: '/images/preview/learnly-pricing.png',
                alt: 'Luma Learning Management System - Pricing - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-pricing.html'
              }]
            }]
          }]
        },

        // INSTRUCTOR DEMO 1
        {
          id: 'instructor',
          title: 'Instructor - Demo 1',
          cols: [{
            cols: [{
              items: [{
                title: 'Instructor Dashboard',
                src: '/images/preview/app-instructor-dashboard.png',
                alt: 'Luma Education Platform - Instructor Dashboard',
                demo_url: 'http://luma.humatheme.com/instructor-dashboard.html'
              }]
            }, {
              items: [{
                title: 'Manage Courses',
                src: '/images/preview/mini-secondary-instructor-courses.png',
                alt: 'Luma LMS Admin Template - Manage Courses',
                demo_url: 'http://luma.humatheme.com/mini-secondary-instructor-courses.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Statement',
                src: '/images/preview/mini-secondary-statement.png',
                alt: 'Luma Learning App - Instructor Statement',
                demo_url: 'http://luma.humatheme.com/mini-secondary-instructor-statement.html'
              }]
            }, {
              items: [{
                title: 'Earnings',
                src: '/images/preview/app-earnings.png',
                alt: 'Luma Education App - Instructor Earnings',
                demo_url: 'http://luma.humatheme.com/instructor-earnings.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Edit Course',
                src: '/images/preview/app-edit-course.png',
                alt: 'Luma Education Platform - Edit Course',
                demo_url: 'http://luma.humatheme.com/instructor-edit-course.html'
              }]
            }, {
              items: [{
                title: 'Edit Quiz',
                src: '/images/preview/mini-secondary-edit-quiz.png',
                alt: 'Luma Learning Management System - Edit Quiz',
                demo_url: 'http://luma.humatheme.com/mini-secondary-instructor-edit-quiz.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Manage Quizzes',
                src: '/images/preview/app-instructor-quizzes.png',
                alt: 'Luma Education LMS - Manage Quizzes',
                demo_url: 'http://luma.humatheme.com/instructor-quizzes.html'
              }]
            }, {
              items: [{
                title: 'Instructor Profile',
                src: '/images/preview/compact-instructor-profile.png',
                alt: 'Luma Learning App - Instructor Profile',
                demo_url: 'http://luma.humatheme.com/compact-teacher-profile.html'
              }]
            }]
          }]
        },

        // INSTRUCTOR DEMO 2
        {
          id: 'instructor-2',
          title: 'Instructor - Demo 2',
          cols: [{
            cols: [{
              items: [{
                title: 'Instructor Dashboard 2',
                src: '/images/preview/learnly-instructor-dashboard.png',
                alt: 'Luma Education Platform - Instructor Dashboard - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-dashboard.html'
              }]
            }, {
              items: [{
                title: 'Manage Courses 2',
                src: '/images/preview/learnly-instructor-courses.png',
                alt: 'Luma LMS Admin Template - Manage Courses - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-courses.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Statement 2',
                src: '/images/preview/learnly-instructor-statement.png',
                alt: 'Luma Learning App - Instructor Statement - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-statement.html'
              }]
            }, {
              items: [{
                title: 'Earnings 2',
                src: '/images/preview/learnly-instructor-earnings.png',
                alt: 'Luma Education App - Instructor Earnings - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-earnings.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Edit Course 2',
                src: '/images/preview/learnly-instructor-edit-course.png',
                alt: 'Luma Education Platform - Edit Course - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-edit-course.html'
              }]
            }, {
              items: [{
                title: 'Edit Quiz 2',
                src: '/images/preview/learnly-instructor-edit-quiz.png',
                alt: 'Luma Learning Management System - Edit Quiz - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-edit-quiz.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Manage Quizzes 2',
                src: '/images/preview/learnly-instructor-quizzes.png',
                alt: 'Luma Education LMS - Manage Quizzes - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-instructor-quizzes.html'
              }]
            }, {
              items: [{
                title: 'Instructor Profile 2',
                src: '/images/preview/learnly-instructor-profile.png',
                alt: 'Luma Learning App - Instructor Profile - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-teacher-profile.html'
              }]
            }]
          }]
        },

        // STUDENT DEMO 1
        {
          id: 'student',
          title: 'Student - Demo 1',
          cols: [{
            cols: [{
              items: [{
                title: 'Student Dashboard',
                src: '/images/preview/mini-secondary-student-dashboard.png',
                alt: 'Luma Education Platform - Student Dashboard',
                demo_url: 'http://luma.humatheme.com/mini-secondary-student-dashboard.html'
              }, {
                title: 'My Learning Paths',
                src: '/images/preview/boxed-my-paths.png',
                alt: 'Luma Education Template - My Learning Paths',
                demo_url: 'http://luma.humatheme.com/boxed-student-paths.html'
              }]
            }, {
              items: [{
                title: 'My Courses',
                src: '/images/preview/app-my-courses.png',
                alt: 'Luma Education Platform - My Courses',
                demo_url: 'http://luma.humatheme.com/student-my-courses.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Take Course',
                src: '/images/preview/compact-take-course.png',
                alt: 'Luma Learning App - Student Take Course',
                demo_url: 'http://luma.humatheme.com/compact-student-take-course.html'
              }]
            }, {
              items: [{
                title: 'Take Lesson',
                src: '/images/preview/compact-take-lesson.png',
                alt: 'Luma Education Platform - Student Take Video Lesson',
                demo_url: 'http://luma.humatheme.com/compact-student-take-lesson.html'
              }, {
                title: 'Take Quiz',
                src: '/images/preview/compact-take-quiz.png',
                alt: 'Luma LMS - Student Take Quiz',
                demo_url: 'http://luma.humatheme.com/compact-student-take-quiz.html'
              }, {
                title: 'Quiz Result Details',
                src: '/images/preview/mini-secondary-quiz-result-details.png',
                alt: 'Luma Learning App - Quiz Result Details',
                demo_url: 'http://luma.humatheme.com/mini-secondary-student-quiz-result-details.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Skill Assessment',
                src: '/images/preview/compact-student-path-assessment.png',
                alt: 'Luma Learning LMS - Skill Assessment',
                demo_url: 'http://luma.humatheme.com/compact-student-path-assessment.html'
              }, {
                title: 'Skill Result',
                src: '/images/preview/mini-secondary-student-path-assessment-result.png',
                alt: 'Luma Education Platform - Skill Result',
                demo_url: 'http://luma.humatheme.com/mini-secondary-student-path-assessment-result.html'
              }]
            }, {
              items: [{
                title: 'Take Path',
                src: '/images/preview/app-path.png',
                alt: 'Luma Learning Management System - Take Path',
                demo_url: 'http://luma.humatheme.com/student-path.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'My Quizzes',
                src: '/images/preview/compact-my-quizzes.png',
                alt: 'Luma LMS - My Quizzes',
                demo_url: 'http://luma.humatheme.com/compact-student-quiz-results.html'
              }]
            }, {
              items: [{
                title: 'Student Profile',
                src: '/images/preview/compact-student-profile.png',
                alt: 'Luma Education Platform - Student Profile',
                demo_url: 'http://luma.humatheme.com/compact-student-profile.html'
              }]
            }]
          }]
        },

        // STUDENT DEMO 2
        {
          id: 'student-2',
          title: 'Student - Demo 2',
          cols: [{
            cols: [{
              items: [{
                title: 'Student Dashboard 2',
                src: '/images/preview/learnly-student-dashboard.png',
                alt: 'Luma Education Platform - Student Dashboard - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-dashboard.html'
              }]
            }, {
              items: [{
                title: 'My Courses 2',
                src: '/images/preview/learnly-my-courses.png',
                alt: 'Luma Education Platform - My Courses - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-my-courses.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Take Course 2',
                src: '/images/preview/learnly-take-course.png',
                alt: 'Luma Learning App - Student Take Course - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-take-course.html'
              }]
            }, {
              items: [{
                title: 'My Learning Paths 2',
                src: '/images/preview/learnly-my-paths.png',
                alt: 'Luma Education Template - My Learning Paths - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-paths.html'
              }, {
                title: 'Take Lesson 2',
                src: '/images/preview/learnly-take-lesson.png',
                alt: 'Luma Education Platform - Student Take Video Lesson - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-take-lesson.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Take Quiz 2',
                src: '/images/preview/learnly-take-quiz.png',
                alt: 'Luma LMS - Student Take Quiz - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-take-quiz.html'
              }, {
                title: 'Quiz Result 2',
                src: '/images/preview/learnly-quiz-result.png',
                alt: 'Luma Learning App - Quiz Result Details - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-quiz-result-details.html'
              }]
            }, {
              items: [{
                title: 'Skill Assessment 2',
                src: '/images/preview/learnly-skill-assessment.png',
                alt: 'Luma Learning LMS - Skill Assessment - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-path-assessment.html'
              }, {
                title: 'Skill Result 2',
                src: '/images/preview/learnly-skill-result.png',
                alt: 'Luma Education Platform - Skill Result - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-path-assessment-result.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'My Quizzes 2',
                src: '/images/preview/learnly-my-quizzes.png',
                alt: 'Luma LMS - My Quizzes - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-quiz-results.html'
              }]
            }, {
              items: [{
                title: 'Student Profile 2',
                src: '/images/preview/learnly-student-profile.png',
                alt: 'Luma Education Platform - Student Profile - Demo 2',
                demo_url: 'http://luma.humatheme.com/learnly-student-profile.html'
              }]
            }]
          }]
        },

        // ENTERPRISE
        {
          id: 'enterprise',
          title: 'Enterprise',
          cols: [{
            cols: [{
              items: [{
                title: 'ERP Dashboard',
                src: '/images/preview/mini-secondary-erp-dashboard.png',
                alt: 'Luma Education - ERP Dashboard',
                demo_url: 'http://luma.humatheme.com/mini-secondary-erp-dashboard.html'
              }, {
                title: 'CRM Dashboard',
                src: '/images/preview/boxed-crm-dashboard.png',
                alt: 'Luma LMS - CRM Dashboard',
                demo_url: 'http://luma.humatheme.com/boxed-crm-dashboard.html'
              }]
            }, {
              items: [{
                title: 'HR Dashboard',
                src: '/images/preview/app-hr-dashboard.png',
                alt: 'Luma Education - HR Dashboard',
                demo_url: 'http://luma.humatheme.com/hr-dashboard.html'
              }, {
                title: 'Employees',
                src: '/images/preview/app-employees.png',
                alt: 'Luma Education - Employees',
                demo_url: 'http://luma.humatheme.com/employees.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Staff',
                src: '/images/preview/app-staff.png',
                alt: 'Luma Education Platform - Staff',
                demo_url: 'http://luma.humatheme.com/staff.html'
              }, {
                title: 'Leaves',
                src: '/images/preview/mini-secondary-leaves.png',
                alt: 'Luma Learning Management System - Leaves',
                demo_url: 'http://luma.humatheme.com/mini-secondary-leaves.html'
              }]
            }, {
              items: [{
                title: 'CMS Dashboard',
                src: '/images/preview/app-cms-dashboard.png',
                alt: 'Luma Admin Template - CMS Dashboard',
                demo_url: 'http://luma.humatheme.com/cms-dashboard.html'
              }, {
                title: 'Posts',
                src: '/images/preview/app-posts.png',
                alt: 'Luma Admin Template - Manage Posts',
                demo_url: 'http://luma.humatheme.com/posts.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Projects',
                src: '/images/preview/app-projects.png',
                alt: 'Luma Education Admin Template - Projects',
                demo_url: 'http://luma.humatheme.com/projects.html'
              }, {
                title: 'Tasks Board',
                src: '/images/preview/app-tasks-board.png',
                alt: 'Luma Learning Admin Template - Tasks Board',
                demo_url: 'http://luma.humatheme.com/tasks-board.html'
              }]
            }, {
              items: [{
                title: 'Tasks List',
                src: '/images/preview/mini-secondary-tasks-list.png',
                alt: 'Luma Education Admin Template - Tasks List',
                demo_url: 'http://luma.humatheme.com/mini-secondary-tasks-list.html'
              }, {
                title: 'Shop Dashboard',
                src: '/images/preview/mini-secondary-shop-dashboard.png',
                alt: 'Luma - Education Shop Dashboard',
                demo_url: 'http://luma.humatheme.com/mini-secondary-ecommerce.html'
              }]
            }]
          }]
        },

        // AUTH
        {
          id: 'auth',
          title: 'Authentication',
          cols: [{
            cols: [{
              items: [{
                title: 'Login',
                src: '/images/preview/login.png',
                alt: 'Luma Education - Login',
                demo_url: 'http://luma.humatheme.com/fixed-login.html'
              }, {
                title: 'Signup',
                src: '/images/preview/signup.png',
                alt: 'Luma Learning Platform - Signup',
                demo_url: 'http://luma.humatheme.com/fixed-signup.html'
              }]
            }, {
              items: [{
                title: 'Login 2',
                src: '/images/preview/learnly-login.png',
                alt: 'Luma Education - Login 2',
                demo_url: 'http://luma.humatheme.com/learnly-login.html'
              }, {
                title: 'Signup 2',
                src: '/images/preview/learnly-signup.png',
                alt: 'Luma Learning Platform - Signup 2',
                demo_url: 'http://luma.humatheme.com/learnly-signup.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Login Image',
                src: '/images/preview/login-image.png',
                alt: 'Luma Education - Login Image',
                demo_url: 'http://luma.humatheme.com/fixed-login-image.html'
              }, {
                title: 'Signup Image',
                src: '/images/preview/signup-image.png',
                alt: 'Luma Learning Platform - Signup Image',
                demo_url: 'http://luma.humatheme.com/fixed-signup-image.html'
              }]
            }, {
              items: [{
                title: 'Signup Payment',
                src: '/images/preview/signup-payment.png',
                alt: 'Luma LMS - Signup Payment',
                demo_url: 'http://luma.humatheme.com/fixed-signup-payment.html'
              }, {
                title: 'Forgot Password',
                src: '/images/preview/reset-password.png',
                alt: 'Luma Education - Forgot Password',
                demo_url: 'http://luma.humatheme.com/fixed-reset-password.html'
              }]
            }]
          }, {
            row_class: 'justify-content-center',
            cols: [{
              class: 'col-sm-6',
              items: [{
                title: 'Reset Password',
                src: '/images/preview/change-password.png',
                alt: 'Luma Education Admin - Reset Password',
                demo_url: 'http://luma.humatheme.com/fixed-change-password.html'
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
                src: '/images/preview/mini-secondary-edit-account.png',
                alt: 'Luma Education App - Edit Account',
                demo_url: 'http://luma.humatheme.com/mini-secondary-edit-account.html'
              }, {
                title: 'Edit Profile',
                src: '/images/preview/mini-secondary-edit-profile.png',
                alt: 'Luma Admin Template - Edit Profile',
                demo_url: 'http://luma.humatheme.com/mini-secondary-edit-account-profile.html'
              }]
            }, {
              items: [{
                title: 'Account Notifications',
                src: '/images/preview/mini-secondary-edit-account-notifications.png',
                alt: 'Luma Admin Template - Edit Account Notifications',
                demo_url: 'http://luma.humatheme.com/mini-secondary-edit-account-notifications.html'
              }, {
                title: 'Change Password',
                src: '/images/preview/mini-secondary-account-password.png',
                alt: 'Luma Admin Template - Change Account Password',
                demo_url: 'http://luma.humatheme.com/mini-secondary-edit-account-password.html'
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
                src: '/images/preview/mini-secondary-billing.png',
                alt: 'Luma Learning Admin Template - Billing',
                demo_url: 'http://luma.humatheme.com/mini-secondary-billing.html'
              }]
            }, {
              items: [{
                title: 'Upgrade Account',
                src: '/images/preview/mini-secondary-upgrade-account.png',
                alt: 'Luma Admin Template - Upgrade Account',
                demo_url: 'http://luma.humatheme.com/mini-secondary-billing-upgrade.html'
              }]
            }]
          }, {
            cols: [{
              items: [{
                title: 'Payment Information',
                src: '/images/preview/mini-secondary-billing-payment.png',
                alt: 'Luma Education Admin - Payment Information',
                demo_url: 'http://luma.humatheme.com/mini-secondary-billing-payment.html'
              }]
            }, {
              items: [{
                title: 'Payment History',
                src: '/images/preview/mini-secondary-payment-history.png',
                alt: 'Luma Admin Template - Payment History',
                demo_url: 'http://luma.humatheme.com/mini-secondary-billing-history.html'
              }]
            }]
          }, {
            row_class: 'justify-content-center',
            cols: [{
              class: 'col-sm-6',
              items: [{
                title: 'Invoice',
                src: '/images/preview/mini-secondary-invoice.png',
                alt: 'Luma Admin Template - Invoice',
                demo_url: 'http://luma.humatheme.com/mini-secondary-billing-invoice.html'
              }]
            }]
          }]
        },

        // MESSAGING
        {
          id: 'messaging',
          title: 'Messaging',
          cols: [{
            cols: [{
              items: [{
                title: 'Email',
                src: '/images/preview/compact-email.png',
                alt: 'Luma Admin Template - Email',
                demo_url: 'http://luma.humatheme.com/compact-email.html'
              }]
            }, {
              items: [{
                title: 'Messages',
                src: '/images/preview/app-messages.png',
                alt: 'Luma Admin Template - Messages',
                demo_url: 'http://luma.humatheme.com/messages.html'
              }]
            }]
          }]
        }

      ]
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
      title: app.i18n.t('Luma Bootstrap')
    }
  },
  created() {
    this.buyURL = {
      href: 'https://themeforest.net/item/luma-education-platform-lms-admin-template/26541343',
      title: this.title
    }
    this.docsURL = {
      href: 'http://luma.humatheme.com/documentation.html',
      title: this.title
    }
  }
}
</script>
