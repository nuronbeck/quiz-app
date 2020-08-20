<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <b-card
        id="usage"
        no-body>

        <b-tabs 
          nav-class="nav-tabs-card"
          content-class="card-body">
          <b-tab
            title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequatur porro molestias repudiandae a laboriosam ipsum cum architecto accusamus. Mollitia ratione officiis tenetur, vero voluptate atque aperiam deserunt ut eius.
          </b-tab>
          <b-tab
            title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum veniam accusantium voluptatibus adipisci maxime nobis ea possimus rerum quos quae nostrum, consequuntur magnam omnis mollitia unde in, aut ad.
          </b-tab>
          <b-tab
            title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ad, laborum atque minus? Tempora nihil, explicabo optio eveniet. Deserunt est unde eius perspiciatis, minus sequi earum repudiandae eum, ex aut!
          </b-tab>
        </b-tabs>
      </b-card>

      <hljs
        :code="code" 
        class="card card-body bg-dark" />

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
        component: 'BTabs',
        nav: ['card_attached']
      },
      title: 'Tabs',
      code: `
        <b-card no-body>
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-body">
            <b-tab title="First">
              // First tab content
            </b-tab>
            <b-tab title="Second">
              // Second tab content
            </b-tab>
            <b-tab title="Third">
              // Third tab content
            </b-tab>
          </b-tabs>
        </b-card>
      `
    }
  }
}
</script>
