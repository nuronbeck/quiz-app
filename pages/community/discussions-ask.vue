<template>
  <div>
    <back-to-course-navbar />
    <div :class="containerClass">

      <b-form 
        :action="localePath('community-discussions')">
        <div class="row">
          <div class="col-lg-9">
            <div class="page-section">
              <h4 v-text="title" />

              <div class="card--connect pb-32pt pb-lg-64pt">
                <div class="card o-hidden mb-0">
                  <div class="card-body table--elevated">

                    <b-form-group
                      :label-cols="3"
                      :label="$t('Question title')"
                      breakpoint="md"
                      label-for="title"
                      label-class="form-label"
                      class="m-0"
                      horizontal>
                      <b-form-input 
                        id="title"
                        :placeholder="$t('Your question ...')"
                        value="Angular HttpClientModule" />
                    </b-form-group>

                  </div>
                  <div class="card-header bg-transparent">
                    <h5 
                      class="text-uppercase mb-0"
                      v-text="$t('Similar questions')" />
                  </div>
                  <discussions
                    :items="similar" />
                </div>
              </div>

              <div class="list-group mb-0">
                <div class="list-group-item">

                  <b-form-group
                    :label-cols="3"
                    :label="$t('Question details')"
                    breakpoint="md"
                    label-for="question"
                    label-class="form-label"
                    class="m-0"
                    horizontal>
                    <b-form-textarea 
                      id="question"
                      :placeholder="$t('Describe your question in detail ...')"
                      rows="4" />
                  </b-form-group>

                </div>
                <div class="list-group-item">

                  <b-form-group
                    :label-cols="3"
                    :label="$t('Topic')"
                    breakpoint="md"
                    label-for="topic"
                    label-class="form-label"
                    class="m-0"
                    horizontal>
                    <b-select 
                      id="topic"
                      :options="['JavaScript']"
                      value="JavaScript"
                      class="w-auto" />
                  </b-form-group>

                </div>
                <div class="list-group-item">

                  <b-form-group
                    :label-cols="3"
                    label-for="notify"
                    :description="$t(`If unchecked, you'll still recieve notifications on our website.`)"
                    breakpoint="md"
                    horizontal
                    class="m-0">
                    <b-form-checkbox 
                      id="notify"
                      :checked="true">
                      {{ $t('Notify me on email when someone replies to my question') }}
                    </b-form-checkbox>
                  </b-form-group>

                </div>
                <div class="list-group-item">
                  <b-btn 
                    type="submit" 
                    variant="accent"
                    v-text="$t('Post Question')" />
                </div>
              </div>

            </div>
          </div>
          <div 
            class="col-lg-3 page-nav"
            :style="{ top: $root.layoutName === 'default' ? '0px' : '4rem' }">

            <div class="page-section pt-lg-64pt">
              <div class="nav page-nav__menu">
                <a href="javascript:void(0)" class="nav-link active">Before you post</a>
              </div>
              <div class="page-nav__content">
                <p class="text-70">There may be other students who have asked the same question before.</p>
                <p class="text-70">You should do a quick search first to make sure your question is unique.</p>
              </div>
            </div>

          </div>
        </div>
      </b-form>

    </div>
  </div>
</template>

<i18n locale="ro">
  {
    "Question title": "Titlul intrebarii",
    "Question details": "Detalii intrebare",
    "Similar questions": "Intrebari similare",
    "Describe your question in detail ...": "Descrie intrebarea ta in detaliu ...",
    "Topic": "Subiectul",
    "Post Question": "Posteaza Intrebarea"
  }
</i18n>

<script>
import Page from '~/components/App/Page'
import BackToCourseNavbar from '~/components/App/Course/BackToCourseNavbar'
import Discussions from '~/components/App/Discussions'

export default {
  components: {
    BackToCourseNavbar,
    Discussions
  },
  extends: Page,
  data () {
    return {
      title: this.$t('Ask Question'),
      similar: [{
        avatarTitle: 'LB',
        date: '2 days ago',
        name: 'Laza Bogdan',
        title: 'Using Angular HttpClientModule instead of HttpModule',
        chips: ['Angular fundamentals']
      }, {
        avatarTitle: 'AC',
        date: '3 days ago',
        name: 'Adam Curtis',
        title: 'Why am I getting an error when trying to install angular/http@2.4.2'
      }]
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  },
  async asyncData({ app }) {
    return {
      title: app.i18n.t('Ask Question')
    }
  }
}
</script>
