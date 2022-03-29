import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // used for authors search and results
        authorKey: '',
        authorsList: [],
        // author's view with list of work
        author: {},
        authorsWorkList: [],
        // author's single work
        workKey: '',
        work: {}
    },
    getters: {
        // getAuthorKey (state) { return state.authorKey },
        // getAuthorsList (state) { return state.authorsList },
        // getAuthor (state) { return state.author },
        // getAuthorsWorkList (state) { return state.authorsWorkList },
        // getWorkKey (state) { return state.workKey },
        // getWorkList (state) { return state.workList },
        // getWork (state) { return state.work }
    },
    mutations: {
        updateAuthorKey(state, value) { 
            state.authorKey = value
        },
        updateAuthorsList(state, value) {
            state.authorsList = value
        },
        updateAuthor(state, value) {
            state.author = value
        },
        updateAuthorsWorkList(state, value) {
            state.authorsWorkList = value
        },
        updateWorkKey(state, value) {
            state.workKey = value
        },
        updateWorkList(state, value) {
            state.workList = value
        },
        updateWork(state, value) {
            state.work = value
        }
    }
})