import axios from 'axios'
import { API_URL } from '../utils/constants'

export const subSectionService = {
  async getSubsections(sectionId) {
    return axios.get(`${API_URL}/sections/${sectionId}/subsections`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async createSubsection(sectionId, data) {
    return axios.post(`${API_URL}/sections/${sectionId}/subsections`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  },

  async deleteSubsection(id) {
    return axios.delete(`${API_URL}/subsections/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
