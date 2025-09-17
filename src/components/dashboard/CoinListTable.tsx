import React, { useState, useEffect } from 'react';
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
import { fetchCoinMarkets } from '../../services/cryptoService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  market_cap: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
}

const CoinListTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const data: Coin[] = await fetchCoinMarkets();
        setCoins(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch coin data:', err);
        setError('Failed to fetch coin data. Please try again later.');
        setIsLoading(false);
      }
    };

    getCoinData();
  }, []);

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

  if (isLoading) {
    return <div className="coin-list-card">Loading...</div>;
  }

  if (error) {
    return <div className="coin-list-card text-red">{error}</div>;
  }

  return (
    <div className="coin-list-card">
      <div className="coin-list-header">
        <h2>Trending</h2>
      </div>
      <table className="coin-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Last 24h</th>
          </tr>
        </thead>
        <tbody>
          {coins.slice(0, 10).map((coin, index) => ( // Slicing to show top 10 coins
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>
                <div className="coin-name-container">
                  <img src={coin.image} alt={coin.symbol} className="coin-logo" />
                  <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                </div>
              </td>
              <td>${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'text-green' : 'text-red'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>-</td> {/* Data not available in this endpoint */}
              <td>${(coin.market_cap / 1e9).toFixed(2)}B</td>
              <td>${(coin.total_volume / 1e9).toFixed(2)}B</td>
              <td>-</td> {/* Sparkline data is not available in the markets endpoint */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinListTable;