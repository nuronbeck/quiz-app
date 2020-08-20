<template>
  <div>
    <docs-page 
      :meta="meta"
      :title="title"
      :breadcrumb="breadcrumb">

      <form-card
        id="default_forms"
        title="Default Forms">
        <template slot="description">
          {{ $store.state.brand }} supports all of Bootstrap's default form styling in addition to a handful of new input types and features. Please <a 
            href="https://getbootstrap.com/docs/4.1/components/forms/" 
            target="_blank">read the official documentation</a> for a full list of options from Bootstrap's core library.
        </template>

        <b-form class="flex">
          <b-form-group
            label="Your email:"
            label-for="exampleInputEmail1"
            label-class="form-label">
            <b-form-input 
              id="exampleInputEmail1"
              type="email"
              required
              placeholder="Enter your email address .." />
          </b-form-group>

          <b-form-group
            label="Your password:"
            label-for="exampleInputPassword1"
            label-class="form-label">
            <b-form-input 
              id="exampleInputPassword1"
              type="password"
              required
              placeholder="Enter your password .." />
          </b-form-group>

          <b-button 
            type="submit" 
            variant="primary">
            Submit
          </b-button>
        </b-form>

        <hljs
          slot="footer"
          :code="code.basic" />
      </form-card>

      <form-card
        id="validation"
        title="Form Validation"
        no-body>
        <template slot="description">
          Provide valuable, actionable feedback to your users with HTML5 form validation. Indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code> classes.
        </template>

        <b-form
          novalidate
          validated 
          class="flex">
          
          <b-form-row>
            <div class="col-12 col-md-6 mb-3">
              <label 
                for="validationSample01"
                class="form-label">First name</label>
              <b-form-input
                id="validationSample01"
                v-model="form.validation.firstname"
                type="text"
                required
                placeholder="First name" />
              <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              <b-form-invalid-feedback>Please provide a first name.</b-form-invalid-feedback>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <label 
                for="validationSample02"
                class="form-label">First name</label>
              <b-form-input
                id="validationSample02"
                v-model="form.validation.lastname"
                type="text"
                required
                placeholder="Last name" />
              <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              <b-form-invalid-feedback>Please provide a last name.</b-form-invalid-feedback>
            </div>
          </b-form-row>

          <b-form-row>
            <div class="col-12 col-md-6 mb-3">
              <label 
                for="validationSample03"
                class="form-label">City</label>
              <b-form-input
                id="validationSample03"
                v-model="form.validation.city"
                type="text"
                required
                placeholder="City" />
              <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              <b-form-invalid-feedback>Please provide a valid city.</b-form-invalid-feedback>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <label 
                for="validationSample04"
                class="form-label">State</label>
              <b-form-input
                id="validationSample04"
                v-model="form.validation.state"
                type="text"
                required
                placeholder="State" />
              <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
              <b-form-invalid-feedback>Please provide a valid state.</b-form-invalid-feedback>
            </div>
          </b-form-row>

          <b-form-group
            label-for="invalidCheck01">
            <b-form-checkbox 
              id="invalidCheck01"
              v-model="form.validation.agree"
              required>
              Agree to terms and conditions
            </b-form-checkbox>
          </b-form-group>

          <b-button 
            type="submit" 
            variant="primary">
            Submit
          </b-button>
        </b-form>

        <template slot="before-footer">
          <b-tabs 
            nav-class="nav-tabs-card"
            content-class="card-footer bg-dark">
            <b-tab
              title="Template">
              <hljs
                :code="code.validation.template"
                class="bg-dark" />
            </b-tab>
            <b-tab
              title="Script">
              <hljs
                :code="code.validation.script"
                lang="js"
                class="bg-dark" />
            </b-tab>
          </b-tabs>
        </template>
      </form-card>

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
        component: 'BForm',
        nav: ['default_forms', 'validation']
      },
      title: 'Forms',
      form: {
        validation: {
          firstname: 'Mark',
          lastname: 'Otto'
        }
      },
      code: {
        basic: `
          <b-form>
            <b-form-group
              label="Your email:"
              label-for="exampleInputEmail1"
              label-class="form-label">
              <b-form-input 
                id="exampleInputEmail1"
                type="email"
                required
                placeholder="Enter your email address .." />
            </b-form-group>

            <b-form-group
              label="Your password:"
              label-for="exampleInputPassword1"
              label-class="form-label">
              <b-form-input 
                id="exampleInputPassword1"
                type="password"
                required
                placeholder="Enter your password .." />
            </b-form-group>

            <b-button 
              type="submit" 
              variant="primary">
              Submit
            </b-button>
          </b-form>
        `,
        validation: {
          template: `
            <b-form
              novalidate
              validated>
              
              <b-form-row>
                <div class="col-12 col-md-6 mb-3">
                  <label 
                    for="validationSample01"
                    class="form-label">First name</label>
                  <b-form-input
                    id="validationSample01"
                    v-model="form.validation.firstname"
                    type="text"
                    required
                    placeholder="First name" />
                  <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                  <b-form-invalid-feedback>Please provide a first name.</b-form-invalid-feedback>
                </div>
                <div class="col-12 col-md-6 mb-3">
                  <label 
                    for="validationSample02"
                    class="form-label">First name</label>
                  <b-form-input
                    id="validationSample02"
                    v-model="form.validation.lastname"
                    type="text"
                    required
                    placeholder="Last name" />
                  <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                  <b-form-invalid-feedback>Please provide a last name.</b-form-invalid-feedback>
                </div>
              </b-form-row>

              <b-form-row>
                <div class="col-12 col-md-6 mb-3">
                  <label 
                    for="validationSample03"
                    class="form-label">City</label>
                  <b-form-input
                    id="validationSample03"
                    v-model="form.validation.city"
                    type="text"
                    required
                    placeholder="City" />
                  <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                  <b-form-invalid-feedback>Please provide a valid city.</b-form-invalid-feedback>
                </div>
                <div class="col-12 col-md-6 mb-3">
                  <label 
                    for="validationSample04"
                    class="form-label">State</label>
                  <b-form-input
                    id="validationSample04"
                    v-model="form.validation.state"
                    type="text"
                    required
                    placeholder="State" />
                  <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                  <b-form-invalid-feedback>Please provide a valid state.</b-form-invalid-feedback>
                </div>
              </b-form-row>

              <b-form-group
                label-for="invalidCheck01">
                <b-form-checkbox 
                  id="invalidCheck01"
                  v-model="form.validation.agree"
                  required>
                  Agree to terms and conditions
                </b-form-checkbox>
              </b-form-group>

              <b-button 
                type="submit" 
                variant="primary">
                Submit
              </b-button>
            </b-form>
          `,
          script: `
            export default {
              data() {
                return {
                  form: {
                    validation: {
                      firstname: 'Mark',
                      lastname: 'Otto'
                    }
                  }
                }
              }
            }
          `
        }
      }
    }
  }
}
</script>
