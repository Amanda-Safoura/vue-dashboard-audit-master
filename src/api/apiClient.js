import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; // Remplace avec l'URL de ton API

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// Intercepteurs pour la gestion des erreurs et des tokens d'auth
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
