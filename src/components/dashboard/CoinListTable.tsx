import { useState, useEffect } from 'react';
import { fetchCoinMarkets } from '../../services/cryptoService';

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
}

const CoinListTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        // Fetch coin data with sparkline data for 7 days
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
          {coins.slice(0, 10).map((coin, index) => (
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
              <td>-</td>
              <td>${(coin.market_cap / 1e9).toFixed(2)}B</td>
              <td>${(coin.total_volume / 1e9).toFixed(2)}B</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinListTable;