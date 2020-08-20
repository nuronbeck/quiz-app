<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="90" 
        height="90" 
        fill="#DBE1EC" 
        viewBox="0 0 48 48">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
      </svg>

      <div class="title">{{ message }}</div>
      <p 
        v-if="statusCode === 404" 
        class="description">
        <nuxt-link 
          class="error-link" 
          to="/">
          Back to the home page
        </nuxt-link>
      </p>
      <p 
        v-else 
        class="description">An error occurred while rendering the page. Check developer tools console for details.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`
    }
  }
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494e;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #f828b;
  line-height: 21px;
  margin-bottom: 10px;
}
.__nuxt-error-page a {
  color: #f828b !important;
  text-decoration: none;
}
</style>
