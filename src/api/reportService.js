import { apiClient } from "./apiClient";

export const reportService = {
  getAll() {
    return apiClient.get("/audit_reports");
  },

  getById(id) {
    return apiClient.get(`/audit_reports/${id}`);
  },

  create(data) {
    return apiClient.post("/audit_reports", data);
  },

  update(id, data) {
    return apiClient.put(`/audit_reports/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/audit_reports/${id}`);
  }
};
