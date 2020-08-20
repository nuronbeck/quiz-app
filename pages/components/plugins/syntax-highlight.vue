<template>
  <div>
    <page-header
      :title="title"
      :breadcrumb="breadcrumb"
      :container-class="containerClass" />
    <div 
      :class="containerClass" 
      class="page-section">

      <hljs
        :code="code"
        class="card card-body bg-dark measure-lead-max" />

    </div>
  </div>
</template>

<script>
import Page from '~/components/App/ComponentsPage'

export default {
  extends: Page,
  data() {
    return {
      title: 'Syntax Highlight',
      code: `
        <template>
          <syntax-highlight :code="code" />
        </template>
        
        <script>
        import SyntaxHighlight from '~/components/Hljs.vue'

        export default {
          components: {
            SyntaxHighlight
          },
          data() {
            return {
              code: \`
              // code to Syntax Highlight
              \`
            }
          }
        }
        <\/script>
      `
    }
  }
}
</script>
