export const state = () => ({
  ui: true,
  state: {
    layout: {
      layout: 'fixed', //'default',
      rtl: false
    },
    'default::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'fixed::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'sticky::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'boxed::mainDrawer': {
      align: 'start',
      sidebar: 'light'
    },
    'default::mainNavbar': {
      navbar: 'dark'//'light'
    },
    'fixed::mainNavbar': {
      navbar: 'dark'
    },
    'sticky::mainNavbar': {
      navbar: 'light'
    },
    'boxed::mainNavbar': {
      navbar: 'dark'
    }
  }
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    if (settings) {
      state.state = Object.assign({}, state.state, settings)
    }
  }
}

export const actions = { 
  setSettings({ commit }, settings) {
    commit('SET_SETTINGS', settings)
  }
}
