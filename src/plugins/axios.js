import axios from 'axios';
import { getToken } from '../services/auth';  // Service pour récupérer le token JWT

// URL de l'API
const API_URL = 'http://192.168.100.121:8000/api';

// Crée une instance Axios avec les paramètres de base
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',  // Par défaut, on envoie du JSON
  }
});

// Ajouter un intercepteur pour ajouter le token d'authentification à chaque requête
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();  // Récupérer le token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Ajouter le token dans l'en-tête Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exporter l'instance axios pour l'utiliser dans les autres fichiers
export default axiosInstance;
