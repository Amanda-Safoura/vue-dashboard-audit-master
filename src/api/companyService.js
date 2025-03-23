import axios from 'axios'
import { API_URL } from '../utils/constants'

export const companyService = {
  async getCompanies() {
    return axios.get(`${API_URL}/companies`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
  }
}
