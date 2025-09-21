import { fetchCoinDetails, fetchCoinOHLC, fetchCoinMarkets } from '../services/cryptoService';
import type { GetStaticPaths, GetStaticProps } from 'next';

export interface OHLC {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CoinDetails {
  name: string;
  symbol: string;
  image: { large: string };
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
    circulating_supply: number;
    ath: { usd: number };
  };
}

export interface CoinPageProps {
  coin: CoinDetails;
  ohlcData: OHLC[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topCoins = await fetchCoinMarkets();
  
  const paths = topCoins.slice(0, 5).map((coin: { id: string }) => ({
    params: { id: coin.id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<CoinPageProps, { id: string }> = async (context) => {
  const coinId = context.params?.id as string;
  
  try {
    const [coin, ohlcData] = await Promise.all([
      fetchCoinDetails(coinId),
      fetchCoinOHLC(coinId, 30)
    ]);

    if (!coin || !ohlcData) {
      return { notFound: true };
    }

    return {
      props: {
        coin,
        ohlcData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(`Error fetching data for ${coinId}:`, error);
    return { notFound: true };
  }
};