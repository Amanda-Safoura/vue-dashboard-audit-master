import { apiClient } from "./apiClient";

export const auditService = {
  getAll() {
    return apiClient.get("/audits");
  },

  getById(id) {
    return apiClient.get(`/audits/${id}`);
  },

  create(data) {
    return apiClient.post("/audits", data);
  },

  update(id, data) {
    return apiClient.put(`/audits/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/audits/${id}`);
  }
};
