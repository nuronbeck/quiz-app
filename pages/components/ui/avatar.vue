<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <card
        id="avatarSize"
        title="Size"
        footer-class="p-0">

        <p class="text-black-70">Using Bootstrap's typical naming structure, you can create a standard avatar, or scale it up to different sizes based on what's needed.</p>

        <div class="avatar-list">
          <fmv-avatar
            v-for="(item, index) in items"
            :key="`size-${index}`"
            :src="item.src"
            :size="item.size"
            alt="avatar" 
            circle />
        </div>

        <template slot="footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <hljs
                :code="codeSize"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <hljs
                :code="codeScript"
                lang="js"
                class="bg-dark" />
            </b-tab>
          </b-tabs>
        </template>
      </card>

      <card
        id="avatarStatus"
        title="Status Indicator"
        footer-class="bg-dark">

        <p class="text-black-70">Add an online or offline status indicator to show user's availability.</p>

        <div class="avatar-list">
          <fmv-avatar
            v-for="(item, index) in items"
            :key="`status-${index}`"
            :src="item.src"
            :size="item.size"
            :status="index % 2 ? 'online' : 'offline'"
            alt="avatar" 
            circle />
        </div>

        <hljs
          slot="footer"
          :code="codeStatus" />
      </card>

      <card
        id="avatarShape"
        title="Shape"
        footer-class="bg-dark">

        <p class="text-black-70">Change the shape of an avatar with the default Bootstrap image classes.</p>

        <div class="avatar-list">
          <fmv-avatar
            v-for="(item, index) in items"
            :key="`shape-${index}`"
            :src="item.src"
            :size="item.size"
            :circle="index % 2 ? true : null" />
        </div>

        <hljs
          slot="footer"
          :code="codeShape" />
      </card>

      <card
        id="avatarRatio"
        title="Ratio"
        footer-class="bg-dark">

        <p class="text-black-70">Change the proportional relationship between the width and height of an avatar to 4 by 3  by setting the <code>landscape</code> property.</p>

        <div class="avatar-list">
          <fmv-avatar
            v-for="(item, index) in items"
            :key="`shape-${index}`"
            :src="item.src"
            :size="item.size"
            landscape />
        </div>

        <hljs
          slot="footer"
          :code="codeLandscape" />
      </card>

      <card
        id="avatarTitle"
        title="Title"
        footer-class="bg-dark">

        <p class="text-black-70">You won't always have an image for every user, so easily use initials instead.</p>

        <div class="avatar-list">
          <fmv-avatar
            v-for="(item, index) in items"
            :key="`title-${index}`"
            :size="item.size"
            title="LB"
            circle />
        </div>

        <hljs
          slot="footer"
          :code="codeTitle" />
      </card>

    </docs-page>
  </div>
</template>

<script>
import Page from '~/components/App/ComponentsPage'

export default {
  extends: Page,
  data() {
    return {
      meta: {
        component: 'FmvAvatar',
        nav: [
          'avatarSize',
          'avatarStatus',
          'avatarShape',
          'avatarRatio',
          'avatarTitle'
        ]
      },
      title: 'Avatar',
      items: [
        {
          src: '/images/256_rsz_nicolas-horn-689011-unsplash.jpg',
          size: 'xxl'
        },
        {
          src: '/images/256_rsz_karl-s-973833-unsplash.jpg',
          size: 'xl'
        },
        {
          src: '/images/256_rsz_florian-perennes-594195-unsplash.jpg',
          size: 'lg'
        },
        {
          src: '/images/256_rsz_james-gillespie-714755-unsplash.jpg'
        },
        {
          src: '/images/256_rsz_sharina-mae-agellon-377466-unsplash.jpg',
          size: 'sm'
        },
        {
          src: '/images/256_rsz_90-jiang-640827-unsplash.jpg',
          size: 'xs'
        }
      ],
      codeScript: `
        import {FmvAvatar} from 'fmv-avatar'

        export default {
          components: {
            FmvAvatar
          }
        }
      `
    }
  },
  computed: {
    codeSize() {
      return this.code({})
    },
    codeStatus() {
      return this.code({ status: true, limit: 2 })
    },
    codeShape() {
      return this.code({ shape: true, limit: 2 })
    },
    codeLandscape() {
      return this.code({ landscape: true, limit: 1 })
    },
    codeTitle() {
      return this.code({ title: true, limit: 1 })
    }
  },
  methods: {
    code({ status, shape, landscape, title, limit }) {
      return this.items
        .filter((item, index) => (limit && limit >= index + 1) || !limit)
        .map((item, index) => {
          return `<fmv-avatar
            ${!title ? `src="${item.src}"` : ''}
            ${!title ? `alt="avatar"` : ''}
            ${item.size ? `size="${item.size}"` : ''}
            ${status ? `status="${index % 2 ? 'online' : 'offline'}"` : ''}
            ${(shape && index % 2) || (!shape && !landscape) ? `circle` : ''}
            ${landscape ? `landscape` : ''}
            ${title ? `title="LB"` : ''} />
            `
        })
        .join('\n')
    }
  }
}
</script>
