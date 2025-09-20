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

// Create axios instance without the default params
const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json',
  },
});

// MODIFIED: Use the request interceptor to add the API key
apiClient.interceptors.request.use(
  (config) => {
    // Ensure params object exists
    config.params = config.params || {};
    // Add the API key to every request's parameters
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

// --- The rest of your functions remain exactly the same ---

export const fetchCoinMarkets = async () => {
  try {
    const response = await apiClient.get('/coins/markets', {
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
    // Return empty array as fallback
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
    // Return empty array as fallback
    return [];
  }
};

export const fetchGlobalData = async () => {
  try {
    const response = await apiClient.get('/global');
    return response.data;
  } catch (error) {
    console.error('Error fetching global data:', error);
    // Return fallback data structure
    return {
      data: {
        total_market_cap: {
          usd: 0
        }
      }
    };
  }
};