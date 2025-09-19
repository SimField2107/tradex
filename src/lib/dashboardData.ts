import { fetchGlobalData, fetchCoinMarkets, fetchMarketChart } from '../services/cryptoService';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export interface GlobalData {
  data: {
    total_market_cap: {
      usd: number;
    };
  };
}

export const getServerSideProps = async () => {
  console.log('Starting getServerSideProps...');
  
  try {
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 15000)
    );

    const dataPromise = Promise.all([
      fetchGlobalData(),
      fetchMarketChart('bitcoin', 7),
      fetchCoinMarkets()
    ]);

    const [globalData, chartPrices, coins] = await Promise.race([dataPromise, timeoutPromise]) as [GlobalData, number[], Coin[]];

    console.log('Data fetched successfully:', {
      globalData: !!globalData,
      chartPricesLength: chartPrices?.length || 0,
      coinsLength: coins?.length || 0
    });

    const totalMarketCap = globalData?.data?.total_market_cap?.usd || null;
    const chartData = Array.isArray(chartPrices) 
      ? (chartPrices as unknown as [number, number][]).map((item: [number, number]) => item[1])
      : [];

    return {
      props: {
        totalMarketCap,
        chartData,
        coins: Array.isArray(coins) ? coins : []
      },
    };
  } catch (error) {
    console.error('Data fetching failed in getServerSideProps:', error);
    
    return {
      props: {
        totalMarketCap: null,
        chartData: [],
        coins: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      },
    };
  }
};
