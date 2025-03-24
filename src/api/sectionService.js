import { apiClient } from "./apiClient";

export const sectionService = {
  getAll() {
    return apiClient.get("/audit_sections");
  },

  getById(id) {
    return apiClient.get(`/audit_sections/${id}`);
  },

  create(data) {
    return apiClient.post("/audit_sections", data);
  },

  update(id, data) {
    return apiClient.put(`/audit_sections/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/audit_sections/${id}`);
  }
};
