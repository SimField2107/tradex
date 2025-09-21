
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Layout from '../components/Layout';
import WalletHeader from '../components/dashboard/WalletHeader';
import AssetsList from '../components/dashboard/AssetsList';
import { fetchCoinMarkets } from '../services/cryptoService';

// Define the types for our data
interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
}

interface Asset {
  name: string;
  symbol: string;
  logo: string;
  valueUSD: number;
  priceChange: number;
  sparkline: number[];
}

// The page component now receives its data through props from getServerSideProps
const PortfolioPage = ({
  totalBalance,
  balanceChange,
  assets,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  if (error) {
    return (
      <Layout>
        <div className="p-4 text-red-400">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="wallet-page-container">
        <WalletHeader totalBalance={totalBalance} balanceChange={balanceChange} />
        <AssetsList assets={assets} />
      </div>
    </Layout>
  );
};

// This function runs on the server for every request to this page
export const getServerSideProps = (async () => {
  try {
    const coinData: Coin[] = await fetchCoinMarkets();

    if (!coinData || coinData.length === 0) {
      throw new Error("Failed to fetch cryptocurrency market data.");
    }
    
    const btc = coinData.find((coin) => coin.symbol === 'btc');
    const eth = coinData.find((coin) => coin.symbol === 'eth');

    if (!btc || !eth) {
      throw new Error("Could not find BTC or ETH in the fetched market data.");
    }

    // Mock a portfolio with 0.1 BTC and 2 ETH
    const btcValue = btc.current_price * 0.1;
    const ethValue = eth.current_price * 2;
    const currentTotal = btcValue + ethValue;

    // Calculate a simulated previous value for balance change
    const btcPrevValue = (btc.current_price - btc.price_change_24h) * 0.1;
    const ethPrevValue = (eth.current_price - eth.price_change_24h) * 2;
    const previousTotal = btcPrevValue + ethPrevValue;

    const assets: Asset[] = [
      {
        name: btc.name,
        symbol: btc.symbol.toUpperCase(),
        logo: btc.image, 
        valueUSD: btc.current_price,
        priceChange: btc.price_change_percentage_24h,
        sparkline: btc.sparkline_in_7d.price,
      },
      {
        name: eth.name,
        symbol: eth.symbol.toUpperCase(),
        logo: eth.image, 
        valueUSD: eth.current_price,
        priceChange: eth.price_change_percentage_24h,
        sparkline: eth.sparkline_in_7d.price,
      },
    ];

    // The data is returned as props to the page component
    return {
      props: {
        totalBalance: currentTotal,
        balanceChange: currentTotal - previousTotal,
        assets,
        error: null,
      },
    };
  } catch (err) {
    console.error('Error in getServerSideProps for portfolio:', err);
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
    return {
      props: {
        totalBalance: 0,
        balanceChange: 0,
        assets: [],
        error: errorMessage,
      },
    };
  }
}) satisfies GetServerSideProps;

export default PortfolioPage;