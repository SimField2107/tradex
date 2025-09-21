import { fetchCoinDetails, fetchCoinOHLC, fetchCoinMarkets } from '../services/cryptoService';
import type { GetStaticPaths, GetStaticProps } from 'next';

// Define the shape of the OHLC data
export interface OHLC {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

// Update the props to include the new data
export interface CoinPageProps {
  coin: any; // Using 'any' for now as the full coin detail object is very large
  ohlcData: OHLC[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  // For a real app, you'd fetch the top 10-20 coins here instead of hardcoding
  const topCoins = await fetchCoinMarkets();
  const paths = topCoins.slice(0, 10).map((coin: { id: string }) => ({
    params: { id: coin.id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<CoinPageProps, { id: string }> = async (context) => {
  const coinId = context.params?.id as string;
  
  try {
    // Fetch both the coin details and the OHLC data at the same time
    const [coin, ohlcData] = await Promise.all([
      fetchCoinDetails(coinId),
      fetchCoinOHLC(coinId, 30) // Fetching 30 days of OHLC data
    ]);

    if (!coin || !ohlcData) {
      return { notFound: true }; // If either API call fails, show a 404
    }

    return {
      props: {
        coin,
        ohlcData,
      },
      revalidate: 60, // Revalidate the data every 60 seconds
    };
  } catch (error) {
    console.error(`Error fetching data for ${coinId}:`, error);
    return { notFound: true };
  }
};