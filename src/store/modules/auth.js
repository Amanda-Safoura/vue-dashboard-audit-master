import { authService } from '../../api/authService'

export default {
  namespaced: true,
  state: {
    user: null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    LOGOUT(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await authService.login(credentials)
        commit('SET_TOKEN', response.token)
        commit('SET_USER', response.user)
        return response
      } catch (error) {
        throw error
      }
    },
    logout({ commit }) {
      commit('LOGOUT')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user
  }
}
