import axios from "axios";
const state = {
  auditSubsections: []
};

const mutations = {
  SET_AUDIT_SUBSECTIONS(state, subsections) {
    state.auditSubsections = subsections;
  }
};

const actions = {
  async fetchAuditSubsections({ commit }) {
    try {
      const response = await axios.get('/api/audit-subsections');
      commit('SET_AUDIT_SUBSECTIONS', response.data);
    } catch (error) {
      console.error('Failed to fetch audit subsections:', error);
    }
  }
};

const getters = {
  allAuditSubsections: (state) => state.auditSubsections
};

export default {
  state,
  mutations,
  actions,
  getters
};
