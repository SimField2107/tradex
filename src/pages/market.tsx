import React, { useMemo } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';
import { fetchCoinMarkets } from '../services/cryptoService';
import MarketTable from '../components/dashboard/MarketTable';
import useMarketStore from '../store/marketStore';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

const MarketPage = ({ coins }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { searchTerm, setSearchTerm, sortKey, sortDirection, setSort } = useMarketStore();

  const processedCoins = useMemo(() => {
    let filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortKey !== 'rank') {
      filtered.sort((a, b) => {
        const valA = a[sortKey as keyof Coin];
        const valB = b[sortKey as keyof Coin];
        if (typeof valA === 'number' && typeof valB === 'number') {
          return sortDirection === 'asc' ? valA - valB : valB - valA;
        }
        return 0;
      });
    } else if (sortDirection === 'asc') {
      filtered.reverse();
    }

    return filtered;
  }, [coins, searchTerm, sortKey, sortDirection]);

  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Market Explorer</h1>
      </div>
      
      {/* The only change is adding an inline style here */}
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search for a coin..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="market-search-input"
        />
      </div>

      <MarketTable 
        coins={processedCoins} 
        sortKey={sortKey} 
        sortDirection={sortDirection}
        onSort={setSort}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ coins: Coin[] }> = async () => {
  const coins = await fetchCoinMarkets();
  
  return {
    props: {
      coins,
    },
    revalidate: 300,
  };
};

export default MarketPage;