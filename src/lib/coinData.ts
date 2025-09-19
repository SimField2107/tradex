import { fetchCoinMarkets, fetchMarketChart } from '../services/cryptoService';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  description?: {
    en: string;
  };
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: 'bitcoin' } },
    { params: { id: 'ethereum' } },
    { params: { id: 'tether' } },
  ];
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const coinId = params?.id as string;
  try {
    const [coinData, chartPrices] = await Promise.all([
      fetchCoinMarkets(),
      fetchMarketChart(coinId, 30) // Fetching 30 days of data for the chart
    ]);

    const coin = coinData.find((c: Coin) => c.id === coinId);
    const chartData = chartPrices.map((item: [number, number]) => item[1]);

    if (!coin) {
      return { notFound: true };
    }

    return {
      props: {
        coin,
        chartData,
      },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error('Error fetching coin data:', error);
    return { notFound: true };
  }
};
