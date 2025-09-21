import axios from 'axios';

// Determine the base URL based on environment
const getBaseURL = () => {
  if (typeof window === 'undefined') {
    // Server-side: use direct CoinGecko API
    return 'https://api.coingecko.com/api/v3';
  } else {
    // Client-side: use Next.js proxy
    return '/api';
  }
};

// Create axios instance
const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json',
  },
});

// Use the request interceptor to add the API key
apiClient.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params['x_cg_demo_api_key'] = process.env.COINGECKO_API_KEY;
    console.log(`Making API request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API response received from: ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// --- Your API functions ---

export const fetchCoinMarkets = async () => {
  try {
    const response = await apiClient.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coin markets:', error);
    return [];
  }
};

export const fetchMarketChart = async (coinId: string, days: number = 7) => {
  try {
    const response = await apiClient.get(`/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: days,
      },
    });
    return response.data.prices || [];
  } catch (error) {
    console.error(`Error fetching market chart for ${coinId}:`, error);
    return [];
  }
};

export const fetchGlobalData = async () => {
  try {
    const response = await apiClient.get('/global');
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    return {
      data: {
        total_market_cap: {
          usd: 0
        }
      }
    };
  }
};

export const fetchCoinOHLC = async (coinId: string, days: number = 7) => {
  try {
    const response = await apiClient.get(`/coins/${coinId}/ohlc`, {
      params: {
        vs_currency: 'usd',
        days: days,
      },
    });
    return response.data.map((d: [number, number, number, number, number]) => ({
      time: d[0] / 1000,
      open: d[1],
      high: d[2],
      low: d[3],
      close: d[4],
    }));
  } catch (error) {
    console.error(`Error fetching OHLC data for ${coinId}:`, error);
    return [];
  }
};

// --- NEW EFFICIENT FUNCTION ADDED HERE ---
export const fetchCoinDetails = async (coinId: string) => {
  try {
    const response = await apiClient.get(`/coins/${coinId}`, {
      params: {
        localization: 'false',
        tickers: 'false',
        market_data: 'true',
        community_data: 'false',
        developer_data: 'false',
        sparkline: 'false',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${coinId}:`, error);
    return null;
  }
};