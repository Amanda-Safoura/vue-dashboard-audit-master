import axios from 'axios'
import { API_URL } from '../utils/constants'

export const auditService = {
  async getAudits() {
    return axios.get(`${API_URL}/audits`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async getAudit(id) {
    return axios.get(`${API_URL}/audits/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async createAudit(data) {
    return axios.post(`${API_URL}/audits`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async deleteAudit(id) {
    return axios.delete(`${API_URL}/audits/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
