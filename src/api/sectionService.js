import axios from 'axios'
import { API_URL } from '../utils/constants'

export const sectionService = {
  async getSections() {
    return axios.get(`${API_URL}/audit_sections`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-type': 'application/json' }
    })
  },

  async createSection(data) {
    return axios.post(`${API_URL}/audit_sections`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-type': 'application/json' }
    })
  },

  async deleteSection(id) {
    return axios.delete(`${API_URL}/audit_sections/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-type': 'application/json' }
    })
  }
}
