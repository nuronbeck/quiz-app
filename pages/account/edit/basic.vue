<template>
  <edit-account-page 
    :title="title"
    :nav="nav">
    
    <b-list-group class="mb-lg-32pt">
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('First name')"
          breakpoint="md"
          label-for="firstname"
          label-class="form-label"
          class="m-0"
          horizontal>
          <b-form-input 
            id="firstname"
            :placeholder="$t('Your first name')"
            value="Alexander" />
        </b-form-group>
      </b-list-group-item>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('Last name')"
          breakpoint="md"
          label-for="lastname"
          label-class="form-label"
          class="m-0"
          horizontal>
          <b-form-input 
            id="lastname"
            :placeholder="$t('Your last name')"
            value="Watson" />
        </b-form-group>
      </b-list-group-item>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('Your email address')"
          :description="$t('Note that if you change your email, you will have to confirm it again.')"
          breakpoint="md"
          label-for="email"
          label-class="form-label"
          class="m-0"
          horizontal>
          <fmv-input-group-merge 
            id="email"
            :placeholder="$t('Your email address')"
            type="email"
            value="alexander.watson@gmail.com"
            prepend>
            <md-icon>email</md-icon>
          </fmv-input-group-merge>
        </b-form-group>
      </b-list-group-item>
    </b-list-group>

    <h4>{{ $t('Change Password') }}</h4>

    <b-list-group>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="`${$t('New password')}:`"
          label-for="password"
          label-class="form-label"
          class="m-0"
          horizontal>
          <fmv-input-group-merge
            id="password"
            :placeholder="$t('New password')"
            type="password"
            class="form-control-prepended"
            required
            prepend>
            <span class="fas fa-key" />
          </fmv-input-group-merge>
        </b-form-group>
      </b-list-group-item>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="`${$t('Confirm password')}:`"
          label-for="password2"
          label-class="form-label"
          class="m-0"
          horizontal>
          <fmv-input-group-merge
            id="password2"
            :placeholder="$t('Confirm password')"
            type="password"
            class="form-control-prepended"
            required
            prepend>
            <span class="fas fa-key" />
          </fmv-input-group-merge>
        </b-form-group>
      </b-list-group-item>
    </b-list-group>
  </edit-account-page>
</template>

<script>
import Page from '~/components/App/Page'
import EditAccountPage from '~/components/App/EditAccountPage'
import EditAccountNav from '~/components/App/EditAccountNav.mixin'

export default {
  components: {
    EditAccountPage
  },
  extends: Page,
  mixins: [EditAccountNav],
  data() {
    return {
      title: 'Basic Information'
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  }
}
</script>
