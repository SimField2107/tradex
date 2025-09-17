// src/services/cryptoService.ts

import axios from 'axios';

// Use the proxy path defined in vite.config.ts to avoid CORS errors
const API_BASE_URL = '/api';

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
        // The markets endpoint does not support sparkline data, so it's best to disable it
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
 * Fetches historical market data (prices, market cap) for a specific coin.
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