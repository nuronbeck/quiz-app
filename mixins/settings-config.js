export default {
  data() {
    return {
      buttonAlign: 'right',
      drawerAlign: 'end'
    }
  },
  computed: {
    options() {
      let options = [
        {
          id: 'layout',
          title: 'Layout',
          children: [
            {
              id: 'layout',
              title: 'Layout',
              component: 'form-image-group',
              value: this.$store.getters.settings.layout.layout,
              options: [
                {
                  text: 'Layout Fluid',
                  value: 'default',
                  image: '/images/app-layout.png'
                },
                {
                  text: 'Layout Fixed',
                  value: 'fixed',
                  image: '/images/fixed-layout.png'
                },
                {
                  text: 'Sticky Layout',
                  value: 'sticky',
                  image: '/images/sticky-layout.png'
                },
                {
                  text: 'Boxed Layout',
                  value: 'boxed',
                  image: '/images/boxed-layout.png'
                }
              ]
            },
            {
              id: 'rtl',
              title: 'Text Direction',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true,
                  selected: !!this.$store.getters.settings.layout.rtl
                },
                {
                  value: false,
                  selected: !!!this.$store.getters.settings.layout.rtl
                }
              ]
            }
          ]
        }
      ]

      ;['default', 'fixed', 'sticky', 'boxed'].map(layout => {
        let mainDrawer = {
          id: `${layout}::mainDrawer`,
          title: 'Main Drawer',
          visible: this.$root.layoutName === layout,
          children: [
            {
              id: 'align',
              title: 'Align',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Start',
                  value: 'start',
                  selected: this.$store.getters.settings[`${layout}::mainDrawer`].align === 'start'
                },
                {
                  text: 'End',
                  value: 'end',
                  selected: this.$store.getters.settings[`${layout}::mainDrawer`].align === 'end'
                }
              ]
            },
            {
              id: 'sidebar',
              title: 'Sidebar Skin',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Dark',
                  value: 'dark',
                  selected: this.$store.getters.settings[`${layout}::mainDrawer`].sidebar === 'dark'
                },
                {
                  text: 'Light',
                  value: 'light',
                  selected: this.$store.getters.settings[`${layout}::mainDrawer`].sidebar === 'light'
                }
              ]
            }
          ]
        }

        let mainNavbar = {
          id: `${layout}::mainNavbar`,
          title: 'Main Navbar',
          visible: this.$root.layoutName === layout,
          children: [
            {
              id: 'navbar',
              title: 'Main Navbar',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Light',
                  value: 'light',
                  selected: this.$store.getters.settings[`${layout}::mainNavbar`].navbar === 'light'
                },
                {
                  text: 'Dark',
                  value: 'dark',
                  selected: this.$store.getters.settings[`${layout}::mainNavbar`].navbar === 'dark'
                }
              ]
            }
          ]
        }

        options.push(mainDrawer)
        options.push(mainNavbar)
      })

      return options
    },
    localDrawerAlign() {
      let drawerAlign = this.drawerAlign
      try {
        drawerAlign =
          this.settings[`${this.$root.layoutName}::mainDrawer.align`] === 'end' ? 'start' : 'end'
      } catch (e) {}

      return drawerAlign
    },
    localButtonAlign() {
      let buttonAlign = this.buttonAlign

      try {
        buttonAlign =
          this.settings[`${this.$root.layoutName}::mainDrawer.align`] === 'end' ? 'left' : 'right'
        if (this.settings['layout.rtl']) {
          buttonAlign =
            this.settings[`${this.$root.layoutName}::mainDrawer.align`] === 'end' ? 'right' : 'left'
        }
      } catch (e) {}

      return buttonAlign
    }
  }
}
