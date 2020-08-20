<template>
  <edit-account-page 
    :title="title"
    :nav="nav"
    no-save>
    <b-card no-body>
      <b-list-group class="list-group-flush">
        <b-list-group-item>
          <b-form-group
            :label-cols="3"
            :label="$t('Your current plan')"
            breakpoint="md"
            label-class="form-label"
            class="m-0 row-align-items-center"
            horizontal>
            <span class="d-flex align-items-center flex-wrap">
              <span class="flex">{{ $t('Basic') }}, {{ $t('$9 per month') }}</span>
              <b-btn
                :to="localePath('account-edit-upgrade')"
                variant="link text-secondary px-0"
                v-text="$t('Change plan')" />
            </span>
          </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-group
            :label-cols="3"
            :label="$t('Billing cycle')"
            breakpoint="md"
            label-class="form-label"
            class="m-0 row-align-items-center"
            horizontal>
            <p class="mb-1">{{ $t('You will be charged $9 on Aug 20, 2018') }}</p>
            <b-form-checkbox
              :checked="true">
              <strong>{{ $t('Enable automatic renewal') }}</strong>
            </b-form-checkbox>
          </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-group
            :label-cols="3"
            :label="$t('Payment information')"
            breakpoint="md"
            label-class="form-label"
            class="m-0 row-align-items-center"
            horizontal>
            <span class="d-flex align-items-center flex-wrap">
              <span class="flex d-flex align-items-center">
                <b-img
                  src="/images/visa.svg"
                  alt="cc"
                  width="40"
                  class="mr-3" />
                <span 
                  class="flex" 
                  style="white-space: nowrap;">{{ $t('Visa ending with 2819') }}</span>
              </span>
              <b-btn
                :to="localePath('account-edit-payment-information')"
                variant="link text-secondary px-0"
                v-text="$t('Change method')" />
            </span>
          </b-form-group>
        </b-list-group-item>
        <b-list-group-item>
          <b-form-group
            :label-cols="3"
            :label="$t('Cancel')"
            breakpoint="md"
            label-class="form-label"
            class="m-0 row-align-items-center"
            horizontal>
            <b-btn 
              variant="outline-secondary"
              v-text="$t('Cancel subscription')" />
          </b-form-group>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </edit-account-page>
</template>

<script>
import Page from '~/components/App/Page'
import EditAccountPage from '~/components/App/EditAccountPage'
import EditBillingNav from '~/components/App/EditBillingNav.mixin'

export default {
  components: {
    EditAccountPage
  },
  extends: Page,
  mixins: [EditBillingNav],
  data() {
    return {
      title: 'Subscription'
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  }
}
</script>
