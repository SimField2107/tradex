import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Dashboard from '../components/dashboard/Dashboard';
import { fetchGlobalData } from '../services/globalService';
import { fetchMarketChart } from '../services/cryptoService';

interface HomePageProps {
  totalMarketCap: number;
  chartData: number[];
}

const HomePage: React.FC<HomePageProps> = ({ totalMarketCap, chartData }) => {
  return (
    <Layout>
      <Dashboard totalMarketCap={totalMarketCap} chartData={chartData} />
    </Layout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [globalData, chartPrices] = await Promise.all([
      fetchGlobalData(),
      fetchMarketChart('bitcoin', 7)
    ]);

    const totalMarketCap = globalData.data.total_market_cap.usd;
    const chartData = chartPrices.map((item: [number, number]) => item[1]);

    return {
      props: {
        totalMarketCap,
        chartData
      },
    };
  } catch (error) {
    console.error('Data fetching failed:', error);
    return {
      props: {
        totalMarketCap: null,
        chartData: []
      },
    };
  }
};