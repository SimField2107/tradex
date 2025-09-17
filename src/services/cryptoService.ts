import axios from 'axios';

// The full URL is used for production since the Vite proxy is for local development only
const API_BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Fetches a list of coin markets with their market data.
 * @returns An array of coin market data.
 */
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

/**
 * Fetches historical market data (prices) for a specific coin.
 * @param coinId The ID of the cryptocurrency (e.g., 'bitcoin').
 * @param days The number of days of historical data to fetch.
 * @returns An array of price data.
 */
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