import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import CandlestickChart from '../../components/dashboard/CandlestickChart';
import { getStaticPaths, getStaticProps } from '../../lib/coinData';
import type { CoinPageProps } from '../../lib/coinData'; // Import our new props type

// A helper component for displaying key stats
const StatCard: React.FC<{ title: string; value: string; className?: string }> = ({ title, value, className }) => (
  <div className={`bg-gray-800/50 p-4 rounded-lg ${className}`}>
    <p className="text-sm text-gray-400">{title}</p>
    <p className="text-xl font-semibold text-white">{value}</p>
  </div>
);

const CoinPage: React.FC<CoinPageProps> = ({ coin, ohlcData }) => {
  if (!coin) {
    return (
      <Layout>
        <div className="p-8 text-center text-gray-400">
          <p>Coin data could not be found.</p>
        </div>
      </Layout>
    );
  }

  // Helper variables to easily access the nested data from the API
  const marketData = coin.market_data;
  const price = marketData.current_price.usd;
  const priceChange24h = marketData.price_change_percentage_24h;
  const isPositive = priceChange24h >= 0;

  // Function to safely format large numbers
  const formatNumber = (num: number) => num ? num.toLocaleString() : 'N/A';

  return (
    <Layout>
      <Head>
        <title>{coin.name} Price & Charts | AI Tradex</title>
      </Head>
      <div className="p-4 md:p-6">
        {/* --- Header --- */}
        <div className="flex items-center mb-6">
          <Image src={coin.image.large} alt={`${coin.name} logo`} width={48} height={48} />
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-white">{coin.name}</h1>
            <p className="text-lg text-gray-400">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>

        {/* --- Price Info --- */}
        <div className="flex items-baseline gap-4 mb-8">
            <p className="text-4xl font-bold text-white">${price.toLocaleString()}</p>
            <p className={`text-xl font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {isPositive ? '▲' : '▼'} {priceChange24h.toFixed(2)}%
            </p>
        </div>

        {/* --- Candlestick Chart --- */}
        <div className="mb-8">
            <CandlestickChart data={ohlcData} />
        </div>

        {/* --- Key Metrics Section --- */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Key Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard title="Market Cap" value={`$${formatNumber(marketData.market_cap.usd)}`} />
            <StatCard title="24h Volume" value={`$${formatNumber(marketData.total_volume.usd)}`} />
            <StatCard title="Circulating Supply" value={formatNumber(marketData.circulating_supply)} />
            <StatCard title="All-Time High" value={`$${formatNumber(marketData.ath.usd)}`} />
          </div>
        </div>
        
        {/* --- Description Section --- */}
        {coin.description?.en && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">About {coin.name}</h2>
            {/* Using dangerouslySetInnerHTML is okay here as the API content is trusted */}
            <div 
              className="prose prose-invert text-gray-300 max-w-none" 
              dangerouslySetInnerHTML={{ __html: coin.description.en }} 
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CoinPage;
export { getStaticPaths, getStaticProps };