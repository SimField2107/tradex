import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCoinMarkets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coin markets:', error);
    throw error;
  }
};

export const fetchMarketChart = async (coinId: string, days: number = 7) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: days,
      },
    });
    return response.data.prices;
  } catch (error) {
    console.error(`Error fetching market chart for ${coinId}:`, error);
    throw error;
  }
};

export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/global`);
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    throw error;
  }
};