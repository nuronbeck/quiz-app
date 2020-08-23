export const state = () => ({
    user: [],
    token: null,
    isUserRegistering: false
})
  
  export const mutations = {
    SET_TOKEN(state, auth_token){
      state.token = auth_token
      auth_token !== null ? localStorage.setItem('auth_token', auth_token) : localStorage.removeItem('auth_token')
    },
    SET_USER(state, userData){
      state.user = userData
    },
    LOGIN_USER (state, user) {
      if (user) {
        state.user = user
      }
    },
    SET_REGISTER_LOADING(state, loading_boolean){
      state.isUserRegistering = loading_boolean
    }
  }
  
  export const actions = {
    userLogin({ commit }, user) {
      commit('LOGIN_USER', user)
    },
    userRegister({ commit }, payload) {
      commit('SET_REGISTER_LOADING', true)
      return new Promise((resolve, reject) => {
        this.$axios.post('/register', payload).then((response) => {
          if(response.status === 200 && response.data.hasOwnProperty('token')){
            commit('SET_TOKEN', response.data.token)
            commit('SET_USER', response.data.data)
            resolve('Registration success!')
            console.log(response.data.data)
          } else {
            commit('SET_TOKEN', null)
            commit('SET_USER', [])
            reject('Registration error!')
          }      
        }).catch(() => {
          commit('SET_TOKEN', null)
          reject('Registration error!')
        })
        commit('SET_REGISTER_LOADING', false)
      })
    }
  }

  export const getters = {
    isRegisteringUser: state => state.isUserRegistering,
    user: state => state.user,
  }
  