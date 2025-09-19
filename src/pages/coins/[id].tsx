import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import CryptoChart from '../../components/dashboard/CryptoChart';
import { getStaticPaths, getStaticProps } from '../../lib/coinData';
import type { Coin } from '../../lib/coinData';

interface CoinPageProps {
  coin: Coin | null;
  chartData: number[];
}

const CoinPage: React.FC<CoinPageProps> = ({ coin, chartData }) => {
  if (!coin) {
    return (
      <Layout>
        <div className="coin-page-container">
          <p>Coin not found.</p>
        </div>
      </Layout>
    );
  }

  const isPositive = coin.price_change_percentage_24h > 0;

  return (
    <Layout>
      <Head>
        <title>{coin.name} | AI Tradex</title>
      </Head>
      <div className="coin-page-container">
        <div className="coin-page-header">
          <Image src={coin.image} alt={`${coin.name} logo`} width={60} height={60} />
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
        </div>

        <div className="coin-metrics">
          <div className="metric-card">
            <h3>Current Price</h3>
            <p>${coin.current_price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            <span className={isPositive ? 'text-green' : 'text-red'}>{isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}% (24h)</span>
          </div>
          <div className="metric-card">
            <h3>Market Cap</h3>
            <p>${(coin.market_cap / 1e9).toFixed(2)}B</p>
          </div>
          <div className="metric-card">
            <h3>24h Volume</h3>
            <p>${(coin.total_volume / 1e9).toFixed(2)}B</p>
          </div>
        </div>

        <div className="coin-chart-container">
          <CryptoChart 
            title={`Price (${coin.symbol.toUpperCase()})`} 
            type="line" 
            data={chartData} 
            labels={chartData.map(() => '')} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default CoinPage;

export { getStaticPaths, getStaticProps };