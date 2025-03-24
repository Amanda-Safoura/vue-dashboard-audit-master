import axios from "axios";
const state = {
  audits: []
};

const mutations = {
  SET_AUDITS(state, audits) {
    state.audits = audits;
  }
};

const actions = {
  async fetchAudits({ commit }) {
    try {
      const response = await axios.get('/api/audits');
      commit('SET_AUDITS', response.data);
    } catch (error) {
      console.error('Failed to fetch audits:', error);
    }
  }
};

const getters = {
  allAudits: (state) => state.audits
};

export default {
  state,
  mutations,
  actions,
  getters
};
