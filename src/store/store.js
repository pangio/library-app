import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // used for authors search and results
    authorsList: [],
    // author's work
    author: {},
    workList: [],
    // work/book details page
    work: {}
  },
  mutations: {
    updateAuthorList(state, value) {
      state.authorsList = value
    },
    updateAuthor(state, value) {
      state.author = value
    },
    updateWorkList(state, value) {
      state.workList = value
    },
    updateWork(state, value) {
      state.work = value
    }
  }
})