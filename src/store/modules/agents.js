import axios from "axios";
const state = {
  agents: []
};

const mutations = {
  SET_AGENTS(state, agents) {
    state.agents = agents;
  }
};

const actions = {
  async fetchAgents({ commit }) {
    try {
      const response = await axios.get('/api/agents');
      commit('SET_AGENTS', response.data);
    } catch (error) {
      console.error('Failed to fetch agents:', error);
    }
  }
};

const getters = {
  allAgents: (state) => state.agents
};

export default {
  state,
  mutations,
  actions,
  getters
};
