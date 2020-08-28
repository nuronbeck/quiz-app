export const state = () => ({
    categories: [],
    isCategoriesLoading: false
})

export const mutations = {
    SET_CATEGORIES_LOADING(state, loading_boolean) {
        state.isCategoriesLoading = loading_boolean
    },
    SET_CATEGORIES(state, categories_data) {
        state.categories = categories_data
    }
}

export const actions = {
    async loadCategories({ commit }) {
        commit('SET_CATEGORIES_LOADING', true)
        return await this.$axios.get(`/public-categories`).then((response) => { 
            commit('SET_CATEGORIES', response.data.data) 
            commit('SET_CATEGORIES_LOADING', false)
        }).catch(() => {
            commit('SET_STATES', [])
            commit('SET_CATEGORIES_LOADING', false)
        }) 
    }
}

export const getters = {
    categories: state => state.categories,
    categoriesIsLoading: state => state.isCategoriesLoading
}