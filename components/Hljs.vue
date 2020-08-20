<template>
  <div
    v-highlightjs="beautify(code)">
    <code
      :class="hlClass" 
      class="highlight bg-dark" />
  </div>
</template>

<style>
.highlight {
  white-space: pre-wrap;
}
.hljs {
  padding: 0;
}
</style>

<script>
import 'highlight.js/styles/vs2015.css'

const beautify = require('js-beautify')

export default {
  props: {
    code: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default() {
        return 'html'
      }
    }
  },
  computed: {
    hlClass() {
      return [this.lang]
    }
  },
  methods: {
    beautify(str) {
      const opt = {
        indent_size: 2,
        wrap_attributes: 'force'
      }
      return this.lang === 'js' ? beautify(str, opt) : beautify.html(str, opt)
    }
  }
}
</script>
