import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/dashboard/Dashboard';
import { getServerSideProps } from '../lib/dashboardData';
import type { Coin } from '../lib/dashboardData';
import { useUiStore } from '../store/uiStore';

interface HomePageProps {
  totalMarketCap: number | null;
  chartData: number[];
  coins: Coin[];
  error?: string;
}

const HomePage: React.FC<HomePageProps> = ({ totalMarketCap, chartData, coins, error }) => {
  const setPageTitle = useUiStore((state) => state.setPageTitle);

  // Set the page title when this page mounts
  useEffect(() => {
    setPageTitle('Dashboard');
  }, [setPageTitle]);

  if (error) {
    console.error('Dashboard error:', error);
  }

  return (
    <Layout>
      <Dashboard totalMarketCap={totalMarketCap} chartData={chartData} coins={coins} />
    </Layout>
  );
};

export default HomePage;

export { getServerSideProps };