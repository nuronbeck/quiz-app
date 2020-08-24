<template>
  <edit-account-page 
    :title="title"
    :nav="nav">

    <b-list-group>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('Your photo')"
          breakpoint="md"
          label-for="avatar"
          label-class="form-label"
          class="m-0 row-align-items-center"
          horizontal>
          <b-media
            class="align-items-center"
            vertical-align="center">
            <fmv-avatar
              slot="aside"
              src="/images/people/user_not_set.jpg"
              alt="Avatar"
              size="lg"
              no-link>
              <md-icon>photo</md-icon>
            </fmv-avatar>
            <b-form-file 
              id="avatar"
              :placeholder="$t('Your avatar photo')"
              value="Alexander" />
          </b-media>
        </b-form-group>
      </b-list-group-item>

      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('Profile name')"
          :description="$t('profile_name_description')"
          breakpoint="md"
          label-for="profilename"
          label-class="form-label"
          class="m-0"
          horizontal>
          <fmv-input-group-merge
            id="profilename"
            :placeholder="$t('Your profile name')"
            value="alexander"
            prepend>
            learnplus.io/
          </fmv-input-group-merge>
        </b-form-group>
      </b-list-group-item>

      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('About you')"
          breakpoint="md"
          label-for="about"
          label-class="form-label"
          class="m-0"
          horizontal>
          <b-form-textarea 
            id="about"
            :placeholder="`${$t('About you')} ...`"
            :rows="3"
            :max-rows="5"
            v-model="about" />
        </b-form-group>
      </b-list-group-item>

      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :label="$t('Privacy')"
          :description="$t('display_realname_description')"
          breakpoint="md"
          label-class="form-label"
          horizontal
          class="m-0">
          <b-form-checkbox 
            id="display_realname"
            :checked="true">
            {{ $t('display_realname_label') }}
          </b-form-checkbox>
        </b-form-group>
      </b-list-group-item>
      <b-list-group-item>
        <b-form-group
          :label-cols="3"
          :description="$t('public_profile_description')"
          breakpoint="md"
          horizontal
          class="m-0">
          <b-form-checkbox 
            id="public_profile"
            :checked="true">
            {{ $t('public_profile_label') }}
          </b-form-checkbox>
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
      title: 'Profile & Privacy',
      about: null
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  }
}
</script>
