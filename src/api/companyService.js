import { apiClient } from "./apiClient";

export const companyService = {
  getAll() {
    return apiClient.get("/companies");
  },

  getById(id) {
    return apiClient.get(`/companies/${id}`);
  },

  create(data) {
    return apiClient.post("/companies", data);
  },

  update(id, data) {
    return apiClient.put(`/companies/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/companies/${id}`);
  }
};
