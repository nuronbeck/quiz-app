export const state = () => ({
    isStatesLoading: false,
    isRegionsLoading: false,
    states: [],
    regions: []
})
  
export const mutations = {
    SET_STATES_LOADING(state, loading_boolean){
        state.isStatesLoading = loading_boolean
    },
    SET_STATES (state, states) {
        state.states = states
    },
    SET_REGIONS_LOADING(state, loading_boolean){
        state.isRegionsLoading = loading_boolean
    },
    SET_REGIONS (state, regions) {
        state.regions = regions
    }
}

export const actions = {
    async loadStates({ commit }, language_code) {
        commit('SET_STATES_LOADING', true)
        return await this.$axios.get('/state').then((response) => {
            commit('SET_STATES', response.data)
            commit('SET_STATES_LOADING', false)
        }).catch(() => {
            commit('SET_STATES', [])
            commit('SET_STATES_LOADING', false)
        })
    },
    async loadRegions({ commit }, state_id) {
        commit('SET_REGIONS_LOADING', true)
        return await this.$axios.get(`/state/${state_id}/region`).then((response) => { 
            commit('SET_REGIONS', response.data) 
            commit('SET_REGIONS_LOADING', false)
        }).catch(() => {
            commit('SET_STATES', [])
            commit('SET_REGIONS_LOADING', false)
        }) 
    }
}

export const getters = {
    states: state => state.states,
    statesIsLoading: state => state.isStatesLoading,
    regions: state => state.regions,
    regionsIsLoading: state => state.isRegionsLoading
}
  