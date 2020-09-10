import { remove } from "dot-object"

export const state = () => ({
    users: [],
    isUsersLoading: false,
    isStatesLoading: false,
    isRegionsLoading: false,
    isDistrictsLoading: false,
    isSavingLoading: false,
    states: [],
    regions: [],
    districts: []
})
  
  export const mutations = {
    SET_SAVING_LOADING(state, loading_boolean){
        state.isSavingLoading = loading_boolean
    },
    SET_USERS (state, usersData){
      state.users = usersData
    },
    SET_USERS_LOADING(state, loading_bool){
        state.isUsersLoading = loading_bool
    },
    SET_STATES_LOADING(state, loading_boolean){
        state.isStatesLoading = loading_boolean
    },
    SET_STATES (state, states){
        state.states = states
    },
    SET_REGIONS_LOADING(state, loading_boolean){
        state.isRegionsLoading = loading_boolean
    },
    SET_REGIONS (state, regions) {
        state.regions = regions
    },
    SET_DISTRICTS_LOADING(state, loading_boolean){
        state.isDistrictsLoading = loading_boolean
    },
    SET_DISTRICTS(state, districts) {
        state.districts = districts
    }
  }
  
  export const actions = {
    async loadAllUsers({ commit }){
        commit('SET_USERS_LOADING', true)
        await this.$axios.get('/admin/users', {
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
    },
    async removeUser({ commit }, u_id){
        return await this.$axios.delete(`/admin/user/${u_id}`, {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then(({status}) => {
            if(status === 200){
                return true 
            } else {
                throw new Error("Error");
            }
        })
        .catch(error => {
            throw new Error(`Error: ${error}`);
        })
    },
    async loadStates({ commit }) {
        commit('SET_STATES_LOADING', true)
        return await this.$axios.get('/admin/state', {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then((response) => {
            commit('SET_STATES', response.data)
            commit('SET_STATES_LOADING', false)
        }).catch(() => {
            commit('SET_STATES', [])
            commit('SET_STATES_LOADING', false)
        })
    },
    saveState({ commit }, payload){
        commit('SET_SAVING_LOADING', true)
        return new Promise((resolve, reject) => {
            this.$axios.post(`/admin/state`, payload, {
                headers: {
                    'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
                }
            })
            .then((response) => {

                if(response.status === 200){
                    resolve(response.data)
                } else {
                    reject(response.status)
                }
            })
            .catch((err) => {
                reject(err)
            })

            commit('SET_SAVING_LOADING', false)
        })
    },
    async removeState({ commit }, state_id){
        return await this.$axios.delete(`/admin/state/${state_id}`, {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then(({status}) => {
            if(status === 200){
                return true 
            } else {
                throw new Error("Error");
            }
        })
        .catch(error => {
            throw new Error(`Error: ${error}`);
        })
    },
    async loadRegions({ commit }, state_id) {
        commit('SET_REGIONS_LOADING', true)
        return await this.$axios.get(`/admin/state/${state_id}/region`, {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then((response) => { 
            commit('SET_REGIONS', response.data) 
            commit('SET_REGIONS_LOADING', false)
        }).catch(() => {
            commit('SET_STATES', [])
            commit('SET_REGIONS_LOADING', false)
        }) 
    },
    async loadDistricts({ commit }, region_id) {
        commit('SET_DISTRICTS_LOADING', true)
        return await this.$axios.get(`/admin/region/${region_id}/district`, {
            headers: {
                'Authorization': `Bearer ${ localStorage.getItem('auth_token') }`
            }
        })
        .then((response) => { 
            commit('SET_DISTRICTS', response.data) 
            commit('SET_DISTRICTS_LOADING', false)
        }).catch(() => {
            commit('SET_DISTRICTS', [])
            commit('SET_DISTRICTS_LOADING', false)
        }) 
    }
  }

  export const getters = {
    isSavingLoading: state => state.isSavingLoading,
    users: state => state.users,
    usersIsLoading: state => state.isUsersLoading,
    states: state => state.states,
    statesIsLoading: state => state.isStatesLoading,
    regions: state => state.regions,
    regionsIsLoading: state => state.isRegionsLoading,
    districts: state => state.districts,
    districtsIsLoading: state => state.isDistrictsLoading
  }
  