import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define the shape of the data we expect
export interface SearchCoin {
  id: string;
  symbol: string;
  name: string;
}

// We'll cache the data here to avoid fetching it on every single request
let cachedCoins: SearchCoin[] = [];
// We'll also track when it was last fetched
let lastFetch: number = 0;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchCoin[] | { error: string }>
) {
  const now = Date.now();
  // Cache the data for 1 hour (3600000 milliseconds) to avoid hitting API limits
  const cacheDuration = 3600000; 

  if (cachedCoins.length > 0 && (now - lastFetch < cacheDuration)) {
    // If we have cached data and it's not stale, return it immediately
    return res.status(200).json(cachedCoins);
  }

  try {
    console.log('Fetching fresh coin list from CoinGecko...');
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    
    // Update our cache
    cachedCoins = response.data;
    lastFetch = now;
    
    res.status(200).json(cachedCoins);
  } catch (error) {
    console.error('Failed to fetch coin list:', error);
    res.status(500).json({ error: 'Failed to fetch coin list from external API' });
  }
}