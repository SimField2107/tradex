import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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

interface CoinListProps {
  coins: Coin[];
}

const CoinListTable: React.FC<CoinListProps> = ({ coins }) => {
  const router = useRouter();

  const handleRowClick = (coinId: string) => {
    router.push(`/coins/${coinId}`);
  };

  const formatPrice = (price: number) => {
    if (price < 0.01) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toLocaleString()}`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e12) return `$${(volume / 1e12).toFixed(2)}T`;
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
    return `$${volume.toLocaleString()}`;
  };

  if (!coins || coins.length === 0) {
    return (
      <div className="coin-list-card">
        <div className="coin-list-header">
          <h2>Trending</h2>
        </div>
        <div className="text-center py-8 text-gray-500">
          <p>Loading cryptocurrency data...</p>
        </div>
      </div>
    );
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
            <tr key={coin.id} onClick={() => handleRowClick(coin.id)} style={{ cursor: 'pointer' }}>
              <td>{index + 1}</td>
              <td>
                <div className="coin-name-container">
                  {/* The only change is adding a className here */}
                  <Image 
                    src={coin.image} 
                    alt={coin.symbol} 
                    width={24} 
                    height={24}
                    className="coin-icon"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-coin.png';
                    }}
                  />
                  <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                </div>
              </td>
              <td>{formatPrice(coin.current_price)}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                {coin.price_change_percentage_24h ? coin.price_change_percentage_24h.toFixed(2) : '0.00'}%
              </td>
              <td>-</td>
              <td>{formatMarketCap(coin.market_cap)}</td>
              <td>{formatVolume(coin.total_volume)}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinListTable;