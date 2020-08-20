<template>
  <div
    :id="item.id" 
    class="card bg-dark">
    <div class="card-header py-12pt">
      <h4 class="d-flex align-items-center justify-content-center m-0">
        <img 
          src="/images/preview/icon/pages.png" 
          alt="Luma Education Template" 
          class="mr-8pt" 
          width="40">
        {{ item.title }}
      </h4>
    </div>
    <div class="card-body p-24pt row align-items-center justify-content-center">

      <div
        v-for="(col, index) in item.cols"
        :key="`landing-demo-card-item-${index}`"
        :class="[col.class ? col.class : 'col-md-6']">
        <div 
          class="row align-items-center"
          :class="col.row_class">
          <div 
            v-for="(subcol, subcolIndex) in col.cols"
            :key="`landing-demo-card-item-subcol-${subcolIndex}`"
            :class="[subcol.class ? subcol.class : 'col-sm']">
            
            <landing-demo-card-item
              v-for="(item, itemIndex) in subcol.items"
              :key="`landing-demo-card-item-${itemIndex}`"
              :item="item" />

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import LandingDemoCardItem from '~/components/Landing/LandingDemoCardItem'
  export default {
    components: {
      LandingDemoCardItem
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>