import axios from 'axios';
import { API_URL, config } from '@/services/auth';

export const getAuditSections = async () => {
  try {
    const response = await axios.get(`${API_URL}/audit_sections`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des sections d\'audit');
  }
};

export const createAuditSection = async (sectionData) => {
  try {
    const response = await axios.post(`${API_URL}/audit_sections`, sectionData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de la section d\'audit');
  }
};

export const updateAuditSection = async (sectionId, sectionData) => {
  try {
    const response = await axios.patch(`${API_URL}/audit_sections/${sectionId}`, sectionData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de la section d\'audit');
  }
};

export const deleteAuditSection = async (sectionId) => {
  try {
    await axios.delete(`${API_URL}/audit_sections/${sectionId}`, config);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de la section d\'audit');
  }
};
