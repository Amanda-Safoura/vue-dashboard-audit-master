import axios from "axios";
const state = {
  reports: []
};

const mutations = {
  SET_REPORTS(state, reports) {
    state.reports = reports;
  }
};

const actions = {
  async fetchReports({ commit }) {
    try {
      const response = await axios.get('/api/reports');
      commit('SET_REPORTS', response.data);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    }
  }
};

const getters = {
  allReports: (state) => state.reports
};

export default {
  state,
  mutations,
  actions,
  getters
};
