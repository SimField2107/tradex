// src/services/globalService.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/global`);
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
};