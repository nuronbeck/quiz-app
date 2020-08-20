export const student = [{
  label: 'Home',
  route: 'student-home',
  icon: {
    type: 'md-icon',
    id: 'home'
  }
}, {
  label: 'Browse Courses',
  route: 'student-courses',
  icon: {
    type: 'md-icon',
    id: 'local_library'
  }
}, {
  label: 'Browse Paths',
  route: 'student-paths',
  icon: {
    type: 'md-icon',
    id: 'style'
  }
}, {
  label: 'Student Dashboard',
  route: 'student-dashboard',
  icon: {
    type: 'md-icon',
    id: 'account_box'
  }
}, {
  label: 'My Courses',
  route: 'student-my-courses',
  icon: {
    type: 'md-icon',
    id: 'search'
  }
}, {
  label: 'My Paths',
  route: 'student-my-paths',
  icon: {
    type: 'md-icon',
    id: 'timeline'
  }
}, {
  label: 'Path Details',
  route: 'student-path',
  icon: {
    type: 'md-icon',
    id: 'change_history'
  }
}, {
  label: 'View Course',
  route: 'student-course',
  icon: {
    type: 'md-icon',
    id: 'face'
  }
}, {
  label: 'View Lesson',
  route: 'student-lesson',
  icon: {
    type: 'md-icon',
    id: 'panorama_fish_eye'
  }
}, {
  label: 'Take Course',
  route: 'student-take-course',
  icon: {
    type: 'md-icon',
    id: 'class'
  },
  badge: {
    label: 'PRO',
    variant: 'accent badge-notifications'
  }
}, {
  label: 'Take Lesson',
  route: 'student-take-lesson',
  icon: {
    type: 'md-icon',
    id: 'import_contacts'
  }
}, {
  label: 'Take Quiz',
  route: 'student-take-quiz',
  icon: {
    type: 'md-icon',
    id: 'dvr'
  }
}, {
  label: 'My Quizzes',
  route: 'student-my-quizzes',
  icon: {
    type: 'md-icon',
    id: 'poll'
  }
}, {
  label: 'Quiz Result',
  route: 'student-quiz-result',
  icon: {
    type: 'md-icon',
    id: 'live_help'
  }
}, {
  label: 'Skill Assessment',
  route: 'student-skill-assessment',
  icon: {
    type: 'md-icon',
    id: 'layers'
  }
}, {
  label: 'Skill Result',
  route: 'student-skill-result',
  icon: {
    type: 'md-icon',
    id: 'assignment_turned_in'
  }
}]

export const instructor = [{
  label: 'Instructor Dashboard',
  route: 'instructor-dashboard',
  icon: {
    type: 'md-icon',
    id: 'school'
  }
}, {
  label: 'Manage Courses',
  route: 'instructor-courses',
  icon: {
    type: 'md-icon',
    id: 'import_contacts'
  }
}, {
  label: 'Manage Quizzes',
  route: 'instructor-quizzes',
  icon: {
    type: 'md-icon',
    id: 'help'
  }
}, {
  label: 'Earnings',
  route: 'instructor-earnings',
  icon: {
    type: 'md-icon',
    id: 'trending_up'
  }
}, {
  label: 'Statement',
  route: 'instructor-statement',
  icon: {
    type: 'md-icon',
    id: 'receipt'
  }
}, {
  label: 'Edit Course',
  route: 'instructor-edit-course',
  icon: {
    type: 'md-icon',
    id: 'post_add'
  }
}, {
  label: 'Edit Quiz',
  route: 'instructor-edit-quiz',
  icon: {
    type: 'md-icon',
    id: 'format_shapes'
  }
}]

export const accountRoutes = [{
  label: 'Login',
  route: 'login'
}, {
  label: 'Sign Up',
  route: 'signup'
}, {
  label: 'Forgot Password',
  route: 'forgot-password'
}, {
  label: 'Edit Account',
  route: 'account-edit-basic'
}, {
  label: 'Profile & Privacy',
  route: 'account-edit-profile'
}, {
  label: 'Subscription',
  route: 'account-edit-subscription'
}, {
  label: 'Upgrade Account',
  route: 'account-edit-upgrade'
}, {
  label: 'Payment Information',
  route: 'account-edit-payment-information'
}, {
  label: 'Payment History',
  route: 'account-edit-payment-history'
}, {
  label: 'Invoice',
  route: 'account-invoice'
}]

export const communityRoutes = [{
  label: 'Browse Teachers',
  route: 'community-teachers'
}, {
  label: 'Student Profile',
  route: 'community-student-profile'
}, {
  label: 'Instructor Profile',
  route: 'community-instructor-profile'
}, {
  label: 'Blog',
  route: 'community-blog'
}, {
  label: 'Blog Post',
  route: 'community-blog-post'
}, {
  label: 'FAQ',
  route: 'community-faq'
}, {
  label: 'Help Center',
  route: 'community-help-center'
}, {
  label: 'Discussions',
  route: 'community-discussions'
}, {
  label: 'Discussion Details',
  route: 'community-discussion'
}, {
  label: 'Ask Question',
  route: 'community-discussions-ask'
}]

export const studentMenu = {
  id: 'studentMenu',
  label: 'Student',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'account_box'
  },
  open: false,
  children: student
}

export const instructorMenu = {
  id: 'instructorMenu',
  label: 'Instructor',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'school'
  },
  open: false,
  children: instructor
}

export const communityMenu = {
  id: 'communityMenu',
  label: 'Community',
  exact: false,
  icon: {
    type: 'md-icon',
    id: 'people_outline'
  },
  open: false,
  children: communityRoutes
}

export const accountMenu = {
  id: 'account',
  label: 'Account',
  icon: {
    type: 'md-icon',
    id: 'person_outline'
  },
  open: false,
  children: accountRoutes
}

export const messagingMenu = {
  label: 'Messages',
  route: 'messages',
  icon: {
    type: 'md-icon',
    id: 'comment'
  },
  badge: {
    label: '3',
    variant: 'accent badge-notifications'
  }
}

export const state = () => ({
  student,
  instructor,

  apps: [
    // studentMenu,
    // instructorMenu,
    messagingMenu,
    accountMenu,
    communityMenu
  ],

  components: [
    {
      id: 'uiComponents',
      label: 'User Interface',
      icon: {
        type: 'md-icon',
        id: 'tune'
      },
      open: false,
      children: [
        {
          label: 'Avatar',
          route: 'components-ui-avatar'
        },
        {
          label: 'Forms',
          route: 'components-ui-forms'
        },
        {
          label: 'Form Image Group',
          route: 'components-ui-form-image-group'
        },
        {
          label: 'Input Group Merge',
          route: 'components-ui-input-group-merge'
        },
        {
          label: 'Cards',
          route: 'components-ui-cards'
        },
        {
          label: 'Tabs',
          route: 'components-ui-tabs'
        },
        {
          label: 'Icons',
          route: 'components-ui-icons'
        },
        {
          label: 'Alerts',
          route: 'components-ui-alerts'
        }
      ]
    },
    {
      id: 'layoutComponents',
      label: 'Layout',
      icon: {
        type: 'md-icon',
        id: 'tune'
      },
      open: false,
      children: [
        {
          label: 'Drawer',
          route: 'components-layout-drawer'
        },
        {
          label: 'Sidebar',
          route: 'components-layout-sidebar'
        },
        {
          label: 'Sidebar Menu',
          route: 'components-layout-sidebar-menu'
        },
        {
          label: 'Drawer Layout',
          route: 'components-layout-drawer-layout'
        },
        {
          label: 'Header',
          route: 'components-layout-header'
        },
        {
          label: 'Header Layout',
          route: 'components-layout-header-layout'
        },
        {
          label: 'Perfect Scrollbar',
          route: 'components-layout-perfect-scrollbar'
        }
      ]
    },
    {
      id: 'pluginComponents',
      label: 'Plugins',
      icon: {
        type: 'md-icon',
        id: 'folder'
      },
      open: false,
      children: [
        {
          label: 'Syntax Highlight',
          route: 'components-plugins-syntax-highlight'
        },
        {
          label: 'Line Chart',
          route: 'components-plugins-charts-line-chart'
        },
        {
          label: 'Area Chart',
          route: 'components-plugins-charts-area-chart'
        },
        {
          label: 'Bar Chart',
          route: 'components-plugins-charts-bar-chart'
        },
        {
          label: 'Doughnut Chart',
          route: 'components-plugins-charts-doughnut-chart'
        },
        {
          label: 'Radar Chart',
          route: 'components-plugins-charts-radar-chart'
        }
      ]
    }
  ],

  documentation: [
    {
      id: 'documentation',
      label: 'Documentation',
      icon: {
        type: 'md-icon',
        id: 'help'
      },
      open: false,
      children: [
        {
          label: 'Introduction',
          route: 'documentation'
        },
        {
          label: 'Installation',
          route: 'documentation-installation'
        },
        {
          label: 'Project Structure',
          route: 'documentation-project-structure'
        },
        {
          label: 'Vuex Store',
          route: 'documentation-vuex-store'
        },
        {
          label: 'Settings',
          route: 'documentation-settings'
        },
        {
          label: 'RTL',
          route: 'documentation-rtl'
        },
        {
          label: 'Components',
          route: 'documentation-components'
        },
        {
          label: 'Sidebar',
          route: 'documentation-sidebar'
        },
        {
          label: 'Navbar',
          route: 'documentation-navbar'
        },
        {
          label: 'Layouts',
          route: 'documentation-layouts'
        },
        {
          label: 'Pages',
          route: 'documentation-pages'
        },
        {
          label: 'Sidebar Menu',
          route: 'documentation-sidebar-menu'
        },
        {
          label: 'Translation',
          route: 'documentation-translation'
        }
      ]
    }
  ]
})
