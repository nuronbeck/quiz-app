<template>
  <div 
    :class="containerClass"
    class="page__container p-0">
    <div class="row">
      <div class="col-lg container-fluid page__container pb-32pt">
        <page-header
          :title="title"
          :breadcrumb="breadcrumb"
          class="page-section" />

        <slot />

        <!-- main component reference information -->
        <component-doc
          v-if="meta.component"
          :name="startCase(meta.component)"
          :component="meta.component"
          :slots="meta.slots"
          :aliases="meta.aliases" />
      </div>
      <div class="col-lg-auto">

        <div
          id="page-nav" 
          :style="{ top: $root.layoutName === 'default' ? '0px' : '4rem' }"
          class="page-nav page-nav--minimal">
          <div class="page-section pt-lg-32pt">
            <b-nav
              v-if="nav.length" 
              class="page-nav__menu">
              <li
                v-for="(item, index) in nav"
                :key="`page-nav-${index}`"
                class="nav-item">
                <b-link
                  :to="`#${item.id}`"
                  :class="{
                    active: current === item.id || (index === 0 && !current)
                  }"
                  active-class="fake-active-class"
                  exact-active-class="fake-active-class"
                  class="nav-link">
                  {{ item.title }}
                </b-link>
              </li>
            </b-nav>

            <docs-next-link
              v-if="meta.next || meta.prev"
              :next="meta.next"
              :prev="meta.prev"
              class="mb-24pt" />

            <b-alert
              variant="soft-warning" 
              :show="!isLive"
              class="d-flex flex-column align-items-center text-center">
              <div class="mb-8pt">
                <md-icon v-text="'warning'" />
              </div>
              <div 
                class="flex" 
                style="min-width: 180px">
                <small class="text-black-100">
                  <strong>Warning!</strong> This a local copy of the documentation. Please <a 
                    :href="`http://${$store.state.docsHostname}${$route.path}`"
                    target="_blank"
                    class="text-accent">go the online version</a> for the latest updates.
                </small>
              </div>
            </b-alert>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.page-nav--minimal {
  width: 220px;
  padding: 0;
  overflow: initial;
}
.page-nav--minimal::before {
  left: 0;
  display: none;
}
</style>

<script>
import layoutConfigMixin from '~/mixins/layout-config'
import ComponentDoc from '~/components/ComponentDoc'
import { scrollTo, offsetTop } from '~/utils/doc'
import throttle from 'lodash.throttle'
import startCase from 'lodash.startcase'

export default {
  components: {
    ComponentDoc
  },
  mixins: [layoutConfigMixin],
  props: {
    meta: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: null
    },
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: null
    }
  },
  computed: {
    isLive() {
      return document.location.hostname === this.$store.state.docsHostname
    },
    containerClass() {
      return this.layoutConfig.containerClass
    },
    nav() {
      if (!this.meta.nav) {
        return []
      }
      return this.meta.nav.map(nav => {
        if (typeof nav === 'string') {
          return {
            id: nav,
            title: startCase(nav)
          }
        }
        return nav
      })
    },
    contents() {
      return this.nav.map(({ id }) => {
        return {
          id,
          offsetTop: document.querySelector(`#${id}`).offsetTop
        }
      })
    }
  },
  watch: {
    '$route.hash': function(hash) {
      if (hash) {
        this.scrollTo()
      }
    }
  },
  created() {
    const reference = {
      id: 'reference',
      title: 'Reference'
    }
    if (this.meta.nav && !this.nav.find(nav => nav.id === reference.id)) {
      this.meta.nav.push(reference)
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', throttle(() => this.scrolled(), 100))
      this.scrollTo()
    })
  },
  methods: {
    startCase,
    scrolled() {
      var h =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight

      var doc = document.documentElement
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

      var el = this.contents.find(el => {
        return el.offsetTop > top - h
      })

      if (el && el.id !== this.current) {
        this.current = el.id
      }
    },
    scrollTo() {
      let hash = this.$route.hash
      if (hash) {
        this.$nextTick(() => {
          let el = document.querySelector(`[id="${hash.replace('#', '')}"]`)
          if (el) {
            this.scrollIntoView(el)
          }
        })
      }
    },
    scrollIntoView(el, cb) {
      const scroller =
        document.scrollingElement || document.documentElement || document.body
      scrollTo(scroller, el ? offsetTop(el) - 64 : 0, 300, cb)
    }
  }
}
</script>
