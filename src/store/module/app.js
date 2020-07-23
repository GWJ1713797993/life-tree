export default {
  namespaced: true,
  state: {
    show: false,
    useName: '',
    time: ''
  },
  getters: {},
  mutations: {
    showFun(state) {
      state.show = true
    },
    hiddenFun(state) {
      state.show = false
    },
    setName(state, value) {
      state.useName = value
    },
    setTime(state, value) {
      state.time = value
    }
  },
  actions: {}
}
