<template>
  <edit-account-page 
    :title="null"
    :nav="nav"
    no-save>
    
    <card
      :title="$t('Invoice')"
      :subtitle="$t('DOCUMENT 10003578 / 12 JAN 2019')"
      title-class="h2"
      header-aside>

      <template slot="aside">
        <b-btn
          variant="flush text-muted d-print-none mr-3"
          @click="print">
          <md-icon class="font-size-24pt">print</md-icon>
        </b-btn>
        <b-btn
          :to="localePath('account-edit-payment-information')"
          variant="accent d-print-none" 
          v-text="$t('Pay')" />
      </template>

      <div class="row">
        <div class="col-6">
          <p class="text-black-70 m-0"><strong>Prepared for</strong></p>
          <h2>Alexander Watson</h2>
          <div class="text-black-50">
            640 Joy Bypass Suite 448 <br>
            Germany
          </div>
        </div>
        <div class="col-6">
          <p class="text-black-70 m-0"><strong>Prepared by</strong></p>
          <h2>LearnPlus Inc.</h2>
          <div class="text-black-50">
            32 Noah Cliffs Suite 626, Romania <br>
            Tax ID RO18880609
          </div>
        </div>
      </div>
    </card>

    <b-card no-body>
      <b-table
        ref="table" 
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        head-variant="light"
        class="table-nowrap"
        responsive>

        <template v-slot:cell(description)="data">
          <b-media
            v-if="data.item.type === 'course'"
            class="align-items-center" 
            vertical-align="center">
            <fmv-avatar
              slot="aside"
              :src="data.item.image"
              :alt="data.item.course"
              :to="localePath('view-course')"
              landscape />
            <b-link
              :to="localePath('view-course')" 
              class="card-title">
              <strong>{{ data.item.course }}</strong>
            </b-link>
          </b-media>
          <template v-else-if="data.item.type === 'title'">
            <p
              class="card-title"
              v-text="$t(data.item.title)" />
            <p
              v-if="data.item.subtitle" 
              class="card-subtitle text-black-50 small"
              v-text="data.item.subtitle" />
          </template>
        </template>

        <template v-slot:cell(amount)="data">
          <strong>&dollar;{{ data.item.amount }} USD</strong>
        </template>

      </b-table>

      <table class="table mb-0">
        <tfoot>
          <tr>
            <td class="text-right text-black-70"><strong>Subtotal</strong></td>
            <td 
              style="width: 120px;" 
              class="text-right"><strong>&dollar;89 USD</strong></td>
          </tr>
          <tr>
            <td class="text-right text-black-70"><strong>Total</strong></td>
            <td 
              style="width: 120px;" 
              class="text-right"><strong>&dollar;89 USD</strong></td>
          </tr>
        </tfoot>
      </table>
    </b-card>

    <div class="px-16pt mb-4">
      <p class="text-black-70 mb-8pt"><strong>Invoice paid</strong></p>
      <div class="d-flex">
        <div class="mr-3">
          <b-img 
            src="/images/visa.svg" 
            alt="visa" 
            width="38" />
        </div>
        <div class="flex text-black-50">
          You don’t need to take further action. Your credit card Visa ending in 2819 has been charged on January 12, 2019.
        </div>
      </div>
    </div>

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
      title: 'Invoice',
      sortBy: 'purchased_at',
      sortDesc: true,
      fields: [
        {
          key: 'description',
          label: this.$t('Description'),
          thClass: 'border-top-0'
        },
        {
          key: 'amount',
          label: this.$t('Amount'),
          class: 'text-right',
          thClass: 'border-top-0 text-right',
          thStyle: {
            width: '120px'
          }
        }
      ],
      items: [
        {
          type: 'course',
          course: 'Learn Angular Fundamentals',
          image: '/images/paths/angular_200x168.png',
          amount: 89
        },
        {
          type: 'title',
          title: 'Basic Plan - Monthly Subscription',
          subtitle: 'For the period of June 20, 2018 to July 20, 2018',
          amount: 9
        },
        {
          type: 'title',
          title: 'Credit discount',
          amount: -5
        }
      ]
    }
  },
  computed: {
    headerClass() {
      return 'mb-0'
    }
  },
  methods: {
    print() {
      window.print()
    }
  }
}
</script>
