import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface Coin {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  '24hChange': number;
  '7dChange': number;
  marketCap: number;
  volume: number;
  sparkline: number[];
}

const MOCK_COINS: Coin[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'btc-logo.png',
    price: 80374.94,
    '24hChange': -0.54,
    '7dChange': -0.35,
    marketCap: 51.3198,
    volume: 59.1228,
    sparkline: [60, 58, 62, 59, 65, 61, 68]
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'eth-logo.png',
    price: 80374.94,
    '24hChange': 0.65,
    '7dChange': -0.35,
    marketCap: 89.4138,
    volume: 56.1348,
    sparkline: [50, 52, 48, 55, 51, 58, 54]
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'usdt-logo.png',
    price: 80374.94,
    '24hChange': 0.35,
    '7dChange': 0.35,
    marketCap: 72.1628,
    volume: 84.2268,
    sparkline: [5, 6, 7, 6, 8, 7, 9]
  },
  {
    id: 4,
    name: 'Polygon',
    symbol: 'MATIC',
    logo: 'matic-logo.png',
    price: 80374.94,
    '24hChange': 0.95,
    '7dChange': 0.35,
    marketCap: 54.1788,
    volume: 24.1268,
    sparkline: [40, 42, 38, 45, 41, 48, 44]
  }
];

const CoinListTable = () => {
  const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: { radius: 0 },
      line: { borderWidth: 2 },
    },
  };

  const getSparklineData = (data: number[], isPositive: boolean) => ({
    labels: Array(data.length).fill(''),
    datasets: [{
      data: data,
      borderColor: isPositive ? 'rgba(76, 175, 80, 1)' : 'rgba(255, 99, 132, 1)',
      backgroundColor: 'transparent',
      tension: 0.4,
    }],
  });

  return (
    <div className="coin-list-card">
      <div className="coin-list-header">
        <h2>Trending</h2>
      </div>
      <table className="coin-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Price</th>
            <th>02%</th>
            <th>24h</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Last 24h</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_COINS.map(coin => (
            <tr key={coin.id}>
              <td>{coin.id}</td>
              <td>
                <div className="coin-name-container">
                  <img src={coin.logo} alt={coin.symbol} className="coin-logo" />
                  <span>{coin.name} ({coin.symbol})</span>
                </div>
              </td>
              <td>${coin.price.toFixed(2)}</td>
              <td className={coin['24hChange'] > 0 ? 'text-green' : 'text-red'}>{coin['24hChange'].toFixed(2)}%</td>
              <td className={coin['7dChange'] > 0 ? 'text-green' : 'text-red'}>{coin['7dChange'].toFixed(2)}%</td>
              <td>${coin.marketCap}B</td>
              <td>${coin.volume}B</td>
              <td>
                <div className="sparkline-container">
                  <Line data={getSparklineData(coin.sparkline, coin['24hChange'] > 0)} options={sparklineOptions} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinListTable;