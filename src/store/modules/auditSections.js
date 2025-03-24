import axios from "axios";
const state = {
  auditSections: []
};

const mutations = {
  SET_AUDIT_SECTIONS(state, sections) {
    state.auditSections = sections;
  }
};

const actions = {
  async fetchAuditSections({ commit }) {
    try {
      const response = await axios.get('/api/audit-sections');
      commit('SET_AUDIT_SECTIONS', response.data);
    } catch (error) {
      console.error('Failed to fetch audit sections:', error);
    }
  }
};

const getters = {
  allAuditSections: (state) => state.auditSections
};

export default {
  state,
  mutations,
  actions,
  getters
};
