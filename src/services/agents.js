import axios from 'axios';
import { API_URL, config } from '@/services/auth';

export const getAgents = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des agents');
  }
};

export const createAgent = async (agentData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, agentData, config);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'agent');
  }
};

export const updateAgent = async (agentId, agentData) => {
  try {
    const { id, ...datas } = agentData;
    const response = await axios.patch(`${API_URL}/users/${agentId}`, datas, config);
    console.log(response, datas, response.data);

    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'agent');
  }
};

export const deleteAgent = async (agentId) => {
  try {
    await axios.delete(`${API_URL}/users/${agentId}`, config);
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'agent');
  }
};
