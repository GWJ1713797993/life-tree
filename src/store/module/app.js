export default {
  namespaced: true,
  state: {
    show: false
  },
  getters: {},
  mutations: {
    showFun(state) {
      state.show = true
    },
    hiddenFun(state) {
      state.show = false
    }
  },
  actions: {}
}
