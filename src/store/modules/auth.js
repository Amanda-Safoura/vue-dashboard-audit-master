import axios from "axios";

const state = {
  token: localStorage.getItem('token') || '',
  user: {}
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_AUTH(state) {
    state.token = '';
    state.user = {};
  }
};

const actions = {
  login({ commit }, credentials) {
    return axios
      .post('/api/login', credentials)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('CLEAR_AUTH');
    delete axios.defaults.headers.common['Authorization'];
  },
  fetchUser({ commit }) {
    axios
      .get('/api/user')
      .then((response) => {
        commit('SET_USER', response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch user data:', error);
      });
  }
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  getToken: (state) => state.token,
  getUser: (state) => state.user
};

export default {
  state,
  mutations,
  actions,
  getters
};
