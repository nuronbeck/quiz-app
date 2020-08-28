<template>
  <fmv-sidebar
    type="light"
    variant="white"
    class="py-16pt"
    wheel-propagation>

    <div class="sidebar-heading">{{ $t('Category') }}</div>
    <ul class="sidebar-menu">
      <li class="sidebar-menu-item active">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">menu_book</span>
          <span class="sidebar-menu-text">{{ $t('All') }}</span>
        </a>
      </li>

      <li class="sidebar-menu-item" v-for="(categoryItem, catInd) in categoriesByLanguage" :key="catInd">
        <a href="" class="sidebar-menu-button">
          <span class="material-icons sidebar-menu-icon sidebar-menu-icon--left">book</span>
          <span class="sidebar-menu-text">{{ categoryItem.name }}</span>
        </a>
      </li>

    </ul>

    <div class="sidebar-heading" v-if="false">Platform</div>
    <div class="sidebar-block" v-if="false">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck01" checked="">
          <label class="custom-control-label" for="filtersCheck01">{{ $t('All') }}</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck02">
          <label class="custom-control-label" for="filtersCheck02">Archive</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck06">
          <label class="custom-control-label" for="filtersCheck06">Unity</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck03">
          <label class="custom-control-label" for="filtersCheck03">Web</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck04">
          <label class="custom-control-label" for="filtersCheck04">iOS &amp; Swift</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck05">
          <label class="custom-control-label" for="filtersCheck05">Android</label>
        </div>
      </div>
    </div>

    <div class="sidebar-heading" v-if="false">Subscription</div>
    <div class="sidebar-block" v-if="false">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck07" checked="">
          <label class="custom-control-label" for="filtersCheck07">{{ $t('All') }}</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck08">
          <label class="custom-control-label" for="filtersCheck08">Free</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck09">
          <label class="custom-control-label" for="filtersCheck09">Beginner</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck10">
          <label class="custom-control-label" for="filtersCheck10">Advanced</label>
        </div>
      </div>
    </div>

    <div class="sidebar-heading" v-if="false">Content type</div>
    <div class="sidebar-block" v-if="false">
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck11" checked="">
          <label class="custom-control-label" for="filtersCheck11">{{ $t('All') }}</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck12">
          <label class="custom-control-label" for="filtersCheck12">Episode</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck13">
          <label class="custom-control-label" for="filtersCheck13">Video</label>
        </div>
      </div>

      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck14">
          <label class="custom-control-label" for="filtersCheck14">Article</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck15">
          <label class="custom-control-label" for="filtersCheck15">Book</label>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input class="custom-control-input" type="checkbox" value="" id="filtersCheck16">
          <label class="custom-control-label" for="filtersCheck16">Screencast</label>
        </div>
      </div>
    </div>
    
  </fmv-sidebar>
</template>

<script>
  import {FmvSidebar} from 'fmv-layout'

  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        categories: 'categories/categories',
      }),
      categoriesByLanguage(){
        return this.categories.filter(categoryItem => categoryItem.lang == this.$i18n.locale)
      }
    },
    components: {
      FmvSidebar
    }
  }
</script>