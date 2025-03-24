import { apiClient } from "./apiClient";

export const authService = {
  login(credentials) {
    return apiClient.post("users/login", credentials);
  },

  getProfile() {
    return apiClient.get("users/me");
  }
};
