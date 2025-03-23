import axios from 'axios'
import { API_URL } from '../utils/constants'

export const authService = {
  async login(credentials) {
    return axios.post(`${API_URL}/login`, credentials)
  },

  async getUser() {
    return axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
