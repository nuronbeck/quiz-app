<template>
  <div>
    <fmv-box
      v-if="localPageHeader"
      effects="parallax-background blend-background"
      :box-image="headerImage"
      class="mdk-box--bg-primary bg-dark mb-0">
      
      <student-home-hero
        v-bind="headerContentComponentProps" />
    </fmv-box>

    <div class="page-section border-bottom-2">
      <div :class="containerClass">
        
        <div 
          class="text-center d-flex align-items-center flex-wrap mb-32pt" 
          style="white-space: nowrap;">
          <h5 
            class="mr-24pt mb-md-0 d-md-inline-block"
            v-text="$t('Popular Topics')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-secondary"
            v-text="$t('Design')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary"
            v-text="$t('Development')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary"
            v-text="$t('Photography')" />
          <b-link 
            class="chip mb-16pt mb-md-0 chip-outline-secondary d-md-none d-lg-inline-flex"
            v-text="$t('Business')" />
        </div>

        <div class="row card-group-row">
          <div 
            v-for="item in blogPosts1"
            :key="item.id"
            class="col-md-6 col-lg-4 card-group-row__col">
            <post-featured-card
              :item="item"
              class="card-group-row__card" />
          </div>
        </div>

        <pager />
      
      </div>
    </div>
    <div class="page-section">
      <div :class="containerClass">

        <div class="row">
          <div class="col-lg-8">

            <page-separator
              :title="$t('Design Resources')" />

            <div class="posts-cards mb-24pt">
              <post-card
                v-for="item in blogPosts2"
                :key="item.id"
                :item="item"
                wrap="xl" />
            </div>

            <pager />

          </div>
          <div class="col-lg-4">
            <recommended />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Popular Topics": "Subiecte Populare",
    "Design Resources": "Resurse de Design"
  }
</i18n>

<script>
import Page from '~/components/App/Page'
import PostFeaturedCard from '~/components/App/Blog/PostFeaturedCard'
import PostCard from '~/components/App/Blog/PostCard'
import Recommended from '~/components/App/Blog/Recommended'
import {FmvBox} from 'fmv-layout'
import StudentHomeHero from '~/components/App/Student/HomeHero'

export default {
  components: {
    PostFeaturedCard,
    PostCard,
    Recommended,
    StudentHomeHero,
    FmvBox
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Blog'),
      blogPosts1: [{
        image: "sketch",
        category: "Sketch",
        title: "Merge Duplicates Inconsistent Symbols",
        author_avatar: "/images/256_luke-porter-261779-unsplash.jpg",
        to: 'community-blog-post'
      }, {
        image: "invision",
        category: "inVision",
        title: "Design Systems Essentials",
        author_avatar: "/images/256_michael-dam-258165-unsplash.jpg",
        to: 'community-blog-post'
      }, {
        image: "photoshop",
        category: "Photoshop",
        title: "Semantic Logo Design",
        author_avatar: "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
        to: 'community-blog-post'
      }],
      blogPosts2: [{
        avatar: "/images/paths/photoshop_200x168.png",
        title: "Semantic Logo Design",
        views: 78,
        tag: "Photoshop",
        date: "10 Nov, 2018 08:25 AM",
        avatarGroup: true,
        avatarCount: 2,
        avatars: [
          "/images/256_joao-silas-636453-unsplash.jpg",
          "/images/256_jeremy-banks-798787-unsplash.jpg",
          "/images/256_daniel-gaffey-1060698-unsplash.jpg"
        ],
        to: 'community-blog-post'
      }, {
        avatar: "/images/paths/invision_200x168.png",
        title: "Design Systems Essentials",
        views: 35,
        tag: "inVision",
        date: "11 Nov, 2018 07:46 AM",
        avatarGroup: true,
        avatarCount: 3,
        avatars: [
          "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
          "/images/256_michael-dam-258165-unsplash.jpg",
          "/images/256_luke-porter-261779-unsplash.jpg"
        ],
        to: 'community-blog-post'
      }, {
        avatar: "/images/paths/sketch_200x168.png",
        title: "Merge Duplicates Inconsistent Symbols & Styles",
        views: 78,
        tag: "Sketch",
        date: "09 Nov, 2018 07:13 PM",
        avatarGroup: true,
        avatarCount: 1,
        avatars: [
          "/images/256_rsz_1andy-lee-642320-unsplash.jpg",
          "/images/256_michael-dam-258165-unsplash.jpg",
          "/images/256_luke-porter-261779-unsplash.jpg"
        ],
        to: 'community-blog-post'
      }]
    }
  },
  computed: {
    guest() {
      return true
    },
    localPageHeader() {
      return this.$root.layoutName !== 'fixed'
    },
    headerClass() {
      if (this.$root.layoutName === 'fixed') {
        return 'mdk-header--bg-primary mb-0'
      }
      return 'mb-0'
    },
    headerEffects() {
      if (this.$root.layoutName === 'fixed') {
        return 'parallax-background waterfall'
      }
    },
    headerImage() {
      return '/images/1280_work-station-straight-on-view.jpg'
    },
    headerContentComponentProps() {
      return {
        title: this.$t('Get Inspired'),
        subtitle: this.$t('Free resources and inspiration on hot topics with articles, talks, podcasts, developer resources and more.'),
        cta: false,
        link: false
      }
    },
    headerCondenses() {
      return this.$root.layoutName === 'fixed'
    },
    headerContentComponent() {
      return StudentHomeHero
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Blog')
    }
  }
}
</script>
