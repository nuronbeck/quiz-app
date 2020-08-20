<template>
  <fmv-drawer 
    id="library-drawer"
    align="end">
    <library-sidebar />
  </fmv-drawer>
</template>

<script>
  import {FmvDrawer} from 'fmv-layout'
  import LibrarySidebar from '~/components/App/LibrarySidebar'

  export default {
    components: {
      FmvDrawer,
      LibrarySidebar
    }
  }
</script>