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
    switch (path) {
      case 'about':
        commit('changeCurrentPage', 'about')
        break
      case 'projects':
        commit('changeCurrentPage', 'projects')
        break
      default:
        commit('changeCurrentPage', null)
    }
  }
}
