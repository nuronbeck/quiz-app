<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <h4 class="mb-8pt">The Compiled Application</h4>
    <p class="text-70 measure-paragraph-max">The <code>dist/</code> directory contains your compiled application which you can deploy. This directory is created when building the web application with <code>npm run dev</code> or with <code>npm run build</code>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── dist
        │   ├── 200.html
        │   ├── README.md
        │   ├── _nuxt
        │   ├── account
        │   ├── components
        │   ├── data
        │   ├── documentation
        │   ├── favicon.ico
        │   ├── forgot-password
        │   ├── images
        │   ├── index.html
        │   ├── instructor
        │   ├── login
        │   ├── ro
        │   ├── signup
        │   └── staff
      " />

    <h4 class="mb-8pt">Nuxt Configuration</h4>
    <p class="text-70 measure-paragraph-max"> By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the <code>nuxt.config.js</code> file. More information about the available options in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/configuration">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── nuxt.config.js
      " />

    <h4 class="mb-8pt">Layouts</h4>
    <p class="text-70 measure-paragraph-max">The <code>layouts/</code> directory contains your Application Layouts. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/views#layouts">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── layouts
        │   ├── README.md
        │   ├── blank.vue
        │   ├── default.vue
        │   ├── error.vue
        │   ├── fixed.vue
        │   └── home.vue
      " />

    <h4 class="mb-8pt">Pages</h4>
    <p class="text-70 measure-paragraph-max">The <code>pages/</code> directory contains your Application Views and Routes. The framework reads all the <code>*.vue</code> files inside this directory and create the router of your application. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/routing">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── pages
        │   ├── README.md
        │   ├── account
        │   ├── components
        │   ├── documentation
        │   ├── forgot-password.vue
        │   ├── instructor
        │   ├── login.vue
        │   ├── pricing.vue
        │   ├── signup.vue
        │   ├── staff.vue
        │   └── student
      " />

    <h4 class="mb-8pt">Components</h4>
    <p class="text-70 measure-paragraph-max">The <code>components/</code> directory contains your Vue.js Components.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── components
        │   ├── App
        │   ├── Card.vue
        │   ├── Charts
        │   ├── ComponentDoc.vue
        │   ├── Hljs.vue
        │   ├── MdIcon.vue
        │   ├── PageSeparator.vue
        │   ├── Player.vue
        │   ├── README.md
        │   └── StaffTable.vue
      " />

    <h4 class="mb-8pt">Locales</h4>
    <p class="text-70 measure-paragraph-max">The <code>locales/</code> directory contains localization files. Translations here are available globally in your app.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── locales
        │   ├── en.json
        │   └── ro.json
      " />

    <h4 class="mb-8pt">Middleware</h4>
    <p class="text-70 measure-paragraph-max">The <code>middleware/</code> directory contains your application middleware. The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts). More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/routing#middleware">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── middleware
        │   ├── README.md
        │   ├── i18n.js
        │   └── settings.js
      " />

    <h4 class="mb-8pt">Mixins</h4>
    <p class="text-70 measure-paragraph-max">The <code>mixins/</code> directory contains Mixins, a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options. More information about the usage of mixins in <a class="text-accent" target="_blank" href="https://vuejs.org/v2/guide/mixins.html">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── mixins
        │   ├── chart.vue
        │   ├── layout-config.js
        │   ├── locale-config.js
        │   ├── main-drawer.js
        │   ├── navbar-config.js
        │   ├── popover.js
        │   ├── settings-config.js
        │   ├── sidebar-config.js
        │   └── table-sort.js
      " />

    <h4 class="mb-8pt">Assets</h4>
    <p class="text-70 measure-paragraph-max">The <code>assets/</code> directory contains your un-compiled assets such as LESS, SASS, or JavaScript. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/assets#webpacked">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── assets
        │   ├── README.md
        │   ├── images
        │   ├── reveal.js
        │   └── scss
      " />

    <h4 class="mb-8pt">Plugins</h4>
    <p class="text-70 measure-paragraph-max">The <code>plugins/</code> directory contains your Javascript plugins that you want to run before mounting the root Vue.js application. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/plugins">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── plugins
        │   ├── README.md
        │   ├── i18n.js
        │   ├── quill.js
        │   └── vendor.js
      " />

    <h4 class="mb-8pt">Static</h4>
    <p class="text-70 measure-paragraph-max">The <code>static/</code> directory contains your static files. Each file inside this directory is mapped to <code>/</code>. Example: <code>/static/robots.txt</code> is mapped as <code>/robots.txt</code>. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/assets#static">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── static
        │   ├── README.md
        │   ├── data
        │   ├── favicon.ico
        │   └── images
      " />

    <h4 class="mb-8pt">Utils</h4>
    <p class="text-70 measure-paragraph-max">The <code>utils/</code> directory contains arbitrary JavaScript utilities.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── utils
        │   ├── array.js
        │   ├── chart-settings.js
        │   ├── doc.js
        │   └── props.js
      " />

    <h4 class="mb-8pt">Vuex Store</h4>
    <p class="text-70 measure-paragraph-max">The <code>store/</code> directory contains your Vuex Store files. More information about the usage of this directory in <a class="text-accent" target="_blank" href="https://nuxtjs.org/guide/vuex-store">the documentation</a>.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="
        ├── store
        │   ├── README.md
        │   ├── index.js
        │   ├── layoutConfig.js
        │   ├── navbarConfig.js
        │   ├── settings.js
        │   ├── sidebarConfig.js
        │   └── sidebarMenuConfig.js
      " />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Project Structure'),
      meta: {
        prev: {
          title: 'Installation',
          to: 'documentation-installation'
        },
        next: {
          title: 'Vuex Store',
          to: 'documentation-vuex-store'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Project Structure')
    }
  }
}
</script>
