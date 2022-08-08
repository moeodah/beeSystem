// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'

// Modules
import * as modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [
    pathify.plugin,
    createPersistedState(),
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
      },
    setUser ({ commit }, user) {
      commit('setUser', user)
      },
  },

})

store.subscribe(mutation => {
  if (!mutation.type.startsWith('user/')) return

  store.dispatch('user/update', mutation)
})

store.dispatch('app/init')

export default store

export const ROOT_DISPATCH = Object.freeze({ root: true })
