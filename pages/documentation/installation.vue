<template>
  <docs-page 
    :meta="meta" 
    :title="title"
    :breadcrumb="breadcrumb">

    <div class="alert alert-soft-warning p-3">
      <h4>Prerequisites</h4>
      <p class="text-100 mb-0">You'll need a <a href="https://gitlab.com" target="_blank" class="text-accent">GitLab.com</a> account before running npm install. Once you signed up, <a href="" class="text-accent" target="_blank">let us know the username</a> on ThemeForest in the item comments section so we can give you access.</p>
    </div>

    <h4>Development prerequisites</h4>
    <ol>
      <li class="measure-paragraph-max text-black-70"><strong>Install Node.js and NPM</strong>: Download Node.js from <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a> and install it on your system. NPM comes bundled with Node.js.</li>
      <li class="measure-paragraph-max text-black-70"><strong>Install npm packages</strong>: In your terminal, go to your project root directory and run the following command. It will download all the dependencies under <code>node_modules</code> folder.</li>
    </ol>

    <h4>Installation</h4>
    <p class="lead text-black-70 measure-lead-max">Installing {{ $store.state.brand }} Vue is simple and straight-forward using npm.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="npm install" />

    <h4>Running development server</h4>
    <p class="lead text-black-70 measure-lead-max">Run the following command to start the development server and access <a href="http://localhost:3000/" target="_blank" class="text-accent">http://localhost:3000/</a> to run your project in browser. The app will automatically reload if you change any of the source files.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="npm run dev" />

    <h4>Production build</h4>
    <p class="lead text-black-70 measure-lead-max">Run the following command to build your application for production with webpack and minify the JS & CSS. The build will be stored in the <code>dist/</code> directory.</p>
    <hljs 
      class="card card-body bg-dark measure-lead-max"
      code="npm run build" />

  </docs-page>
</template>

<script>
import Page from '~/components/App/Page'
export default {
  extends: Page,
  data() {
    return {
      title: this.$t('Installation'),
      meta: {
        prev: {
          title: 'Introduction',
          to: 'documentation'
        },
        next: {
          title: 'Project Structure',
          to: 'documentation-project-structure'
        }
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Installation')
    }
  }
}
</script>
