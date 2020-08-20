<script>
  import AppLayout from '~/layouts/default'

  export default {
    extends: AppLayout,
    head: {
      bodyAttrs: {
        class: 'layout-boxed'
      }
    },
    computed: {
      sidebarSearch() {
        return false
      },
      sidebarBrandClass() {
        return 'sidebar-brand-dark bg-primary-pickled-bluewood'
      },
      drawerLayoutClass() {
        return 'layout-boxed__layout'
      }
    }
  }
</script>