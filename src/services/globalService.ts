// src/services/globalService.ts
import axios from 'axios';

// Use the proxy path to avoid CORS errors
const API_BASE_URL = '/api';

export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/global`);
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
};