export const state = () => ({
    user: [],
    token: null,
    isUserRegistering: false,
    isUserLoggingIn: false
})
  
  export const mutations = { 
    SET_TOKEN(state, auth_token){
      state.token = auth_token
      auth_token !== null ? localStorage.setItem('auth_token', auth_token) : localStorage.removeItem('auth_token')
    },
    SET_USER(state, userData){
      state.user = userData
    },
    SET_REGISTER_LOADING(state, loading_boolean){
      state.isUserRegistering = loading_boolean
    },
    SET_LOGIN_LOADING(state, loading_boolean){
      state.isUserLoggingIn = loading_boolean
    }
  }
  
  export const actions = {
    async checkUserAuthToken({ commit }){
      if(localStorage.getItem('auth_token') !== null && localStorage.getItem('auth_token') !== 'undefined'){
        await this.$axios.get('/profile', {
          headers: {
            'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
          }
        })
        .then((response) => { 
          if(response.status === 200){
            commit('SET_TOKEN', localStorage.getItem('auth_token'))
            commit('SET_USER', response.data.data)
          } else {
            commit('SET_TOKEN', null)
            commit('SET_USER', []) 
          }   
        })
        .catch(() => {
          localStorage.removeItem('auth_token')
          commit('SET_TOKEN', null)
          commit('SET_USER', []) 
        })
      } else {
        localStorage.removeItem('auth_token')
        commit('SET_TOKEN', null)
        commit('SET_USER', [])  
      }
    },
    userLogin({ commit }, payload) {
      commit('SET_LOGIN_LOADING', true)
      return new Promise((resolve, reject) => {
        this.$axios.post('/login', payload).then((response) => {
          if(response.status === 200 && response.data.hasOwnProperty('token')){
            commit('SET_TOKEN', response.data.token)
            commit('SET_USER', response.data.data)
            resolve('Logged successfully!')
          } else {
            commit('SET_TOKEN', null)
            commit('SET_USER', [])
            reject('Loggin error!')
          }      
        }).catch(() => {
          commit('SET_TOKEN', null)
          reject('Loggin error!')
        })
        commit('SET_LOGIN_LOADING', false)
      })
    },
    userRegister({ commit }, payload) {
      commit('SET_REGISTER_LOADING', true)
      return new Promise((resolve, reject) => {
        this.$axios.post('/register', payload).then((response) => {
          if(response.status === 200 && response.data.hasOwnProperty('token')){
            commit('SET_TOKEN', response.data.token)
            commit('SET_USER', response.data.data)
            resolve('Registration success!')
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
    },
    async userLogout({ commit }, token) {
      await this.$axios.get('/logout', {
        headers: {
          'Authorization': `Bearer ${ token }`
        }
      })
      .then(() => { 
        commit('SET_TOKEN', null)
        commit('SET_USER', [])    
      })
      .catch(() => {
        commit('SET_TOKEN', null)
        commit('SET_USER', []) 
      })
    }
  }

  export const getters = {
    isRegisteringUser: state => state.isUserRegistering,
    isLoggingUser: state => state.isUserLoggingIn,
    user: state => state.user,
    token: state => state.token,
    hasToken: state => !!state.token,
    isAdmin: state => !!state.user ? state.user.role === 2 : false,
    isTeacher: state => !!state.user ? state.user.role === 1 : false,
    isStudent: state => !!state.user ? state.user.role === 0 : false,
  }
  