import axios from 'axios'
import { API_URL } from '../utils/constants'

export const reportService = {
  async getReport(subsectionId) {
    return axios.get(`${API_URL}/subsections/${subsectionId}/report`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async createReport(subsectionId, data) {
    return axios.post(`${API_URL}/subsections/${subsectionId}/report`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
