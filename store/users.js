export const state = () => ({
    users: [],
    isUsersLoading: false
})
  
  export const mutations = { 
    SET_USERS (state, usersData){
      state.users = usersData
    },
    SET_USERS_LOADING(state, loading_bool){
        state.isUsersLoading = loading_bool
    }
  }
  
  export const actions = {
    async loadAllUsers({ commit }){
        commit('SET_USERS_LOADING', true)
        await this.$axios.get('/admin/user', {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then((response) => { 
            if(response.status === 200){
                console.log(response.data.data)
                commit('SET_USERS', response.data.data)
            } else {
                commit('SET_USERS', [])
            }
            commit('SET_USERS_LOADING', false)
        })
        .catch(() => {
            commit('SET_USERS', [])
            commit('SET_USERS_LOADING', false)
        })
    }
  }

  export const getters = {
    users: state => state.users,
    usersIsLoading: state => state.isUsersLoading
  }
  