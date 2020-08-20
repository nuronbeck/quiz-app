<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <card
        id="usage"
        :header-aside="true"
        title="Card Title"
        subtitle="Card Subtitle"
        footer-class="text-50">

        <b-dropdown
          slot="aside"
          variant="flush"
          right
          no-caret>
          <template slot="button-content">
            <md-icon class="text-muted icon-24pt">more_horiz</md-icon>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit, facere temporibus nostrum alias tenetur reiciendis dolorem vitae veritatis, aspernatur nam consequuntur molestiae voluptatum reprehenderit dolorum neque veniam quidem, voluptas.</p>
        
        <b-link 
          to="/"
          exact 
          class="btn btn-primary">
          Dashboard
        </b-link>

        <span slot="footer">The card footer text.</span>
      </card>

      <hljs
        :code="code" 
        class="card bg-dark card-body" />

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
        component: 'card',
        nav: ['usage']
      },
      title: 'Cards',
      code: `
        <card
          :header-aside="true"
          title="Card Title"
          subtitle="Card Subtitle"
          footer-class="text-50">

          <b-dropdown
            slot="aside"
            variant="flush"
            right
            no-caret>
            <template slot="button-content">
              <md-icon class="text-muted icon-24pt">more_horiz</md-icon>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>

          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit, facere temporibus nostrum alias tenetur reiciendis dolorem vitae veritatis, aspernatur nam consequuntur molestiae voluptatum reprehenderit dolorum neque veniam quidem, voluptas.</p>
          
          <b-link 
            to="/"
            exact 
            class="btn btn-primary">
            Dashboard
          </b-link>

          <span slot="footer">The card footer text.</span>
        </card>
      `
    }
  }
}
</script>
