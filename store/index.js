export const state = () => ({
  currentPage: null
})

export const mutations = {
  changeCurrentPage(state, page) {
    if (page) {
      state.currentPage = page
    } else {
      state.currentPage = null
    }
  }
}

export const actions = {
  detectCurrentPage({ commit }) {
    const path = location.pathname.replace(/\//g, '')
    // eslint-disable-next-line no-console
    console.log(path)

    if (path.match(/^projects/)) {
      commit('changeCurrentPage', 'projects')
    } else if (path === 'about') {
      commit('changeCurrentPage', 'about')
    } else {
      commit('changeCurrentPage', null)
    }
  }
}
