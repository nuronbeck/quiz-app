<template>
  <div>
    <div
      :id="id"
      ref="card"
      :class="cardClasses"
      class="card card-sm card--elevated p-relative o-hidden overlay--primary"
      :data-partial-height="reveals ? revealPartialHeight : null">
      
      <span
        ref="image" 
        :data-position="position"
        :data-height="reveals ? 168 : 128"
        class="js-image">
        <img 
          :src="`/images/paths/${image}_430x168.png`" 
          alt="course">
        <span 
          class="overlay__content"
          :class="[reveals ? 'align-items-start justify-content-start' : null]">
          <span 
            class="overlay__action d-flex"
            :class="[ reveals ? 'card-body align-items-center' : 'flex-column text-center' ]">
            <md-icon 
              :class="reveals ? 'mr-4pt' : 'icon-32pt'"
              v-text="'play_circle_outline'" />
            <span class="card-title text-white">
              <template v-if="account">{{ $t('Resume') }}</template>
              <template v-else>{{ $t('Preview') }}</template>
            </span>
          </span>
        </span>
      </span>

      <span
        v-if="free" 
        class="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>

      <div class="mdk-reveal__content d-flex flex-column flex">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex">
              <a 
                class="card-title" 
                href="">{{ title }}</a>
              <small class="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
            </div>
            <md-icon 
              v-b-tooltip.hover.top="{ title: favorite ? $t('Remove Favorite') : $t('Add Favorite') }"
              class="ml-4pt text-20 card-course__icon-favorite">
              favorite<template v-if="!favorite">_border</template>
            </md-icon>
          </div>
          <div class="d-flex">
            <b-form-rating
              class="b-rating-inline" 
              :value="4" 
              variant="rating"
              size="sm"
              show-value
              show-value-max
              readonly
              inline
              no-border />
            <small
              v-if="compact" 
              class="ml-auto text-50"
              v-text="$t('hours', { hours: 6 })" />
          </div>
        </div>
        <div
          v-if="!compact" 
          class="card-footer">
          <div class="row justify-content-between">
            <div class="col-auto d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('hours', { hours: 6 })" />
              </p>
            </div>
            <div class="col-auto d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('lessons', { lessons: 12 })" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-popover
      v-if="popoverContainer"
      triggers="click"
      :target="id"
      :html="true"
      :container="popoverContainer"
      custom-class="popover-lg"
      @show="show"
      @hide="hide">
      
      <div class="media">
        <div class="media-left mr-12pt">
          <img 
            :src="`/images/paths/${avatar}_40x40@2x.png`" 
            width="40" 
            height="40" 
            :alt="avatar" 
            class="rounded">
        </div>
        <div class="media-body">
          <div class="card-title mb-0">{{ title }}</div>
          <p class="lh-1 mb-0">
            <span class="text-black-50 small" v-text="$t('with')"></span>
            <span class="text-black-50 small font-weight-bold">Elijah Murray</span>
          </p>
        </div>
      </div>
      
      <p class="my-16pt text-black-70">{{ localDescription }}</p>

      <div class="mb-16pt">
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
        </div>
        <div class="d-flex align-items-center">
          <span class="material-icons icon-16pt text-black-50 mr-8pt">check</span>
          <p class="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
        </div>
      </div>

      <template v-if="account">
        <div class="my-32pt">
          <div class="d-flex align-items-center mb-8pt justify-content-center">
            <div class="d-flex align-items-center mr-8pt">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('minutes_left', { minutes: 50 })" />
              </p>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
              <p class="flex text-black-50 lh-1 mb-0">
                <small v-text="$t('lessons', { lessons: 12 })" />
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <b-link 
              :to="localePath('student-take-lesson')"
              class="btn btn-primary mr-8pt"
              v-text="$t('Resume')" />
            <b-link 
              :to="localePath('student-take-course')"
              class="btn btn-outline-secondary ml-0"
              v-text="$t('Start over')" />
          </div>
        </div>

        <div class="d-flex align-items-center">
          <small 
            class="text-black-50 mr-8pt" 
            v-text="$t('Your rating')" />
          <div class="rating mr-8pt">
            <span class="rating__item"><span class="material-icons text-primary">star</span></span>
            <span class="rating__item"><span class="material-icons text-primary">star</span></span>
            <span class="rating__item"><span class="material-icons text-primary">star</span></span>
            <span class="rating__item"><span class="material-icons text-primary">star</span></span>
            <span class="rating__item"><span class="material-icons text-primary">star_border</span></span>
          </div>
          <small class="text-black-50">4/5</small>
        </div>
      </template>

      <div
        v-else 
        class="row align-items-center">
        <div class="col-auto">
          <div class="d-flex align-items-center mb-4pt">
            <span class="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
            <p class="flex text-black-50 lh-1 mb-0">
              <small v-text="$t('hours', { hours: 6 })" />
            </p>
          </div>
          <div class="d-flex align-items-center mb-4pt">
            <span class="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
            <p class="flex text-black-50 lh-1 mb-0">
              <small v-text="$t('lessons', { lessons: 12 })" />
            </p>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
            <p class="flex text-black-50 lh-1 mb-0">
              <small v-text="$t('Beginner')" />
            </p>
          </div>
        </div>
        <div class="col text-right">
          <b-btn 
            :to="localePath('student-lesson')" 
            variant="primary"
            v-text="$t('Watch trailer')" />
        </div>
      </div>

    </b-popover>
  </div>
</template>

<i18n locale="en">
  {
    "lessons": "{lessons} lessons",
    "minutes_left": "{minutes} minutes left",
    "hours": "{hours} hours"
  }
</i18n>

<i18n locale="ro">
  {
    "lessons": "{lessons} lecții",
    "hours": "{hours} ore",
    "minutes_left": "{minutes} minute rămase",
    "Preview": "Previzualizare",
    "Watch trailer": "Urmărește trailer",
    "Start over": "Reîncepe",
    "Resume": "Continuă",
    "with": "cu",
    "Add Favorite": "Adaugă Favorit",
    "Remove Favorite": "Șterge Favorit",
    "Beginner": "Începător",
    "Edit Course": "Editează Cursul"
  }
</i18n>

<script>
  import popoverMixin from '~/mixins/popover'
  import { handler } from 'dom-factory'
  import 'ui-huma/js/overlay'

  import { imageComponent } from '~/assets/js/image'
  handler.register('image', imageComponent)

  import '~/assets/js/reveal'
  const uniqueId = require('lodash/uniqueId')

  export default {
    mixins: [popoverMixin],
    props: {
      cardClass: {
        type: String,
        default: 'mb-16pt'
      },
      title: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      image: {
        type: String,
        default: null
      },
      avatar: {
        type: String,
        default: null
      },
      account: {
        type: Boolean
      },
      free: {
        type: Boolean
      },
      favorite: {
        type: Boolean
      },
      compact: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      position: {
        type: String,
        default: null
      },
      reveals: {
        type: Boolean,
        default: true
      },
      revealPartialHeight: {
        type: Number,
        default() {
          return 44
        }
      }
    },
    computed: {
      id() {
        return uniqueId('course_')
      },
      localDescription() {
        if (!this.description) {
          return `Learn the fundamentals of working with ${this.title} and how to create basic applications.`
        }

        return this.description
      },
      cardClasses() {
        const classes = []
        if (this.cardClass) {
          if (Array.isArray(this.cardClass)) {
            classes = this.cardClass
          }
          else if (typeof this.cardClass === 'string') {
            classes.push(this.cardClass)
          }
        }
        if (this.reveals) {
          classes.push('mdk-reveal')
        }

        return classes
      }
    },
    mounted() {
      this.$root.$on('bv::popover::show', bvEventObj => {
        this.$root.$emit('bv::hide::popover')
      })

      this.$nextTick(() => {
        if (this.$refs.card) {
          this.$refs.card.addEventListener('domfactory-component-upgraded', () => this.update())

          handler.upgradeElement(this.$refs.card, 'overlay')

          if (this.reveals) {
            handler.upgradeElement(this.$refs.card, 'mdk-reveal')
          }
        }

        if (this.$refs.image) {
          handler.upgradeElement(this.$refs.image, 'image')
        }

        if (this.open) {
          setTimeout(() => this.$root.$emit('bv::show::popover', this.id), 100)
        }
      })
    },
    updated() {
      this.$nextTick(() => this.update())
    },
    beforeDestroy() {
      handler.downgradeElement(this.$refs.card, 'overlay')
      handler.downgradeElement(this.$refs.image, 'image')
      if (this.reveals) {
        handler.downgradeElement(this.$refs.card, 'mdk-reveal')
      }
    },
    methods: {
      update() {
        if (this.$refs.card.overlay) {
          this.$refs.card.overlay.trigger = 'click'
        }
        if (this.$refs.image.image) {
          this.$refs.image.image._reset()
        }
        if (this.reveals && this.$refs.card.mdkReveal) {
          this.$refs.card.mdkReveal._reset()
        }
      },
      show() {
        if (this.$refs.card.overlay) {
          this.$refs.card.overlay.show()
        }
        if (this.reveals && this.$refs.card.mdkReveal) {
          this.$refs.card.mdkReveal.open()
        }
      },
      hide() {
        if (this.$refs.card.overlay) {
          this.$refs.card.overlay.hide()
        }
        if (this.reveals && this.$refs.card.mdkReveal) {
          this.$refs.card.mdkReveal.close()
        }
      },
    }
  }
</script>