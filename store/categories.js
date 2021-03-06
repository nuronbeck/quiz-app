export const state = () => ({
    categories: [],
    isCategoriesLoading: false,
    categoryFilter: 'all'
})

export const mutations = {
    SET_CATEGORIES_LOADING(state, loading_boolean) {
        state.isCategoriesLoading = loading_boolean
    },
    SET_CATEGORIES(state, categories_data) {
        state.categories = categories_data
    },
    SET_CATEGORIES_FILTER(state, categoryMatcher){
        state.categoryFilter = categoryMatcher
    }
}

export const actions = {
    setCategoriesFilter({ commit }, filterMatcher){
        commit('SET_CATEGORIES_FILTER', filterMatcher)
    },
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
    categoryFilter: state => state.categoryFilter,
    categoriesFiltered: state => state.categoryFilter === 'all' ? state.categories : state.categories.filter(categoryItem => categoryItem.id == state.categoryFilter ),
    categoriesIsLoading: state => state.isCategoriesLoading
}