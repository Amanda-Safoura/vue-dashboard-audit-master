import axios from 'axios';
import { API_URL, config } from '@/services/auth';

export const getReports = async (auditId, subsectionId) => {
  try {
    const response = await axios.get(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des rapports');
  }
};

export const createReport = async (auditId, subsectionId, reportData) => {
  try {
    const response = await axios.post(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports`, reportData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création du rapport');
  }
};

export const updateReport = async (auditId, subsectionId, reportId, reportData) => {
  try {
    const response = await axios.patch(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports/${reportId}`, reportData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du rapport');
  }
};

export const deleteReport = async (auditId, subsectionId, reportId) => {
  try {
    await axios.delete(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports/${reportId}`, config);
  } catch (error) {
    throw new Error('Erreur lors de la suppression du rapport');
  }
};
