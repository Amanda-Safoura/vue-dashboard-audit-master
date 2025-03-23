import { auditService } from '../../api/auditService'

export default {
  namespaced: true,
  state: {
    audits: []
  },
  mutations: {
    SET_AUDITS(state, audits) {
      state.audits = audits
    },
    ADD_AUDIT(state, audit) {
      state.audits.push(audit)
    }
  },
  actions: {
    async fetchAudits({ commit }) {
      try {
        const audits = await auditService.getAudits()
        commit('SET_AUDITS', audits)
      } catch (error) {
        console.error('Erreur lors de la récupération des audits:', error)
      }
    },
    async createAudit({ commit }, auditData) {
      try {
        const newAudit = await auditService.createAudit(auditData)
        commit('ADD_AUDIT', newAudit)
      } catch (error) {
        console.error("Erreur lors de la création de l'audit:", error)
      }
    }
  },
  getters: {
    audits: (state) => state.audits
  }
}
