import axios from 'axios'

export const API_URL = "http://localhost:8000/api"

export const getToken = () => {
  return localStorage.getItem('token') // Récupère le token JWT
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('token') // Vérifie si l'utilisateur est authentifié
}

export const config = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const login = async () => {
  try {
    const response = await axios.post(`${API_URL}/login`, config)
    localStorage.setItem('token', response.data.token) // Sauvegarde le token JWT
    return response.data
  } catch (error) {
    throw new Error('Erreur de connexion')
  }
}

export const logout = () => {
  localStorage.removeItem('token') // Retirer le token JWT lors de la déconnexion
}
