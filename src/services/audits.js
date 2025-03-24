import axios from 'axios';
import { API_URL, config } from '@/services/auth';

export const getAudits = async () => {
  try {
    const response = await axios.get(`${API_URL}/audits`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des audits');
  }
};

export const createAudit = async (auditData) => {
  try {
    const response = await axios.post(`${API_URL}/audits`, auditData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'audit');
  }
};

export const updateAudit = async (auditId, auditData) => {
  try {
    const response = await axios.patch(`${API_URL}/audits/${auditId}`, auditData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'audit');
  }
};

export const deleteAudit = async (auditId) => {
  try {
    await axios.delete(`${API_URL}/audits/${auditId}`, config);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'audit');
  }
};
