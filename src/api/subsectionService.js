import { apiClient } from "./apiClient";

export const subsectionService = {
  getAll() {
    return apiClient.get("/audit_subsections");
  },

  getById(id) {
    return apiClient.get(`/audit_subsections/${id}`);
  },

  create(data) {
    return apiClient.post("/audit_subsections", data);
  },

  update(id, data) {
    return apiClient.put(`/audit_subsections/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/audit_subsections/${id}`);
  }
};
