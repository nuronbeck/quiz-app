<template>
  <div class="border-top-2 js-fix-footer">
    <div
      :class="containerClass" 
      class="page-section d-flex flex-column">
      <p
        :class="{ 
          'text-white-70': dark,
          'text-70' : !dark
        }" 
        class="brand mb-24pt">
        <img 
          class="brand-icon" 
          :src="logo" 
          width="30" 
          :alt="brand"> 
        {{ brand }}
      </p>
      <p
        :class="{ 
          'text-white-50': dark,
          'text-50' : !dark
        }"  
        class="measure-lead-max small mr-8pt">{{ brand }} is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>
      <p class="mb-8pt d-flex">
        <a 
          href=""
          :class="{ 
            'text-white-70': dark,
            'text-70' : !dark
          }"  
          class="text-underline mr-8pt small">Terms</a>
        <a 
          href="" 
          :class="{ 
            'text-white-70': dark,
            'text-70' : !dark
          }" 
          class="text-underline small">Privacy policy</a>
      </p>
      <p
        :class="{ 
          'text-white-50': dark,
          'text-50' : !dark
        }"  
        class="small mt-n1 mb-0">Copyright 2019 &copy; All rights reserved.</p>
    </div>
  </div>
</template>

<style>
  .mdk-drawer-layout {
    overflow: initial;
  }
</style>

<script>
  import { handler } from 'dom-factory'
  import 'fix-footer'
  import 'fix-footer/dist/fix-footer.css'

  export default {
    props: {
      dark: {
        type: Boolean
      },
      brand: {
        type: String,
        default() {
          return this.$store.state.brand
        }
      },
      logo: {
        type: String,
        default: '/images/logo/black-70@2x.png'
      },
      containerClass: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        observer: null
      }
    },
    watch: {
      $route: 'onInit'
    },
    created() {
      this.$root.$on('luma::reset::footer', this.onInit)
    },
    updated() {
      this.onInit()
    },
    mounted() {
      this.$el.addEventListener('domfactory-component-upgraded', () => this.onInit())
      this.$nextTick(() => handler.upgradeElement(this.$el, 'fix-footer'))

      this.observer = new MutationObserver((mutations) => { 
        mutations.forEach(mutation => this.setPosition(mutation.target))
      })

      this.observer.observe(this.$el, { 
        attributes: true, 
        attributeOldValue: false, 
        attributeFilter: [
          'class'
        ]
      })
    },
    beforeDestroy() {
      handler.downgradeElement(this.$el, 'fix-footer')
      this.$el.classList.remove('fix-footer--fixed')
      this.observer.disconnect()
    },
    methods: {
      onInit() {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$el.fixFooter._reset()
          }, 100)
        })
      },
      setPosition() {
        if (this.$el.classList.contains('fix-footer--fixed')) {
          const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
          this.$el.style.top = `${vh - this.$el.offsetHeight}px`
          this.$el.style.bottom = `auto`
        }
        else {
          this.$el.style.top = ''
          this.$el.style.bottom = ''
        }
      }
    }
  }
</script>