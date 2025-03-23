import axios from 'axios'
import { API_URL } from '../utils/constants'

export const authService = {
  async login(credentials) {
    return axios.post(`${API_URL}/login`, credentials)
  },

  async logout() {
    return axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
    )
  },

  async getUser() {
    return axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
