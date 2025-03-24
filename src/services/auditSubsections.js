import axios from 'axios';
import { API_URL, config } from '@/services/auth';

export const getAuditSubsections = async () => {
  try {
    const response = await axios.get(`${API_URL}/audit_subsections`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des sous-sections d\'audit');
  }
};


export const getAuditSubsectionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/audit_subsections/${id}`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des sous-sections d\'audit');
  }
};


export const createAuditSubsection = async (subsectionData) => {
  try {
    const response = await axios.post(`${API_URL}/audit-subsections`, subsectionData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de la sous-section d\'audit');
  }
};

export const updateAuditSubsection = async (subsectionId, subsectionData) => {
  try {
    const response = await axios.patch(`${API_URL}/audit-subsections/${subsectionId}`, subsectionData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de la sous-section d\'audit');
  }
};

export const deleteAuditSubsection = async (subsectionId) => {
  try {
    await axios.delete(`${API_URL}/audit-subsections/${subsectionId}`, config);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de la sous-section d\'audit');
  }
};
