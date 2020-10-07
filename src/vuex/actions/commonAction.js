export default {
  SET_REQUEST ({commit}, option) {
    commit('SET_CURRENT_URL', option)
  },
  SET_MOBILE({commit}) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({commit}) {
    commit('SWITCH_DESKTOP')
  }
}
