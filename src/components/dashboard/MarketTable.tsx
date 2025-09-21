import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ArrowDown, ArrowUp } from 'lucide-react';

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

interface MarketTableProps {
  coins: Coin[];
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  onSort: (key: keyof Coin | 'rank') => void;
}

const formatPrice = (price: number) => `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}`;
const formatLargeNumber = (num: number) => {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
};

const SortableHeader: React.FC<{
  label: string;
  sortKey: string;
  currentSortKey: string;
  direction: 'asc' | 'desc';
  onSort: (key: any) => void;
  className?: string;
}> = ({ label, sortKey, currentSortKey, direction, onSort, className }) => {
  const isActive = sortKey === currentSortKey;
  // We construct the className string manually here
  const buttonClassName = `market-header-button ${isActive ? 'market-header-button--active' : ''}`;
  
  return (
    <th className={className}>
      <button className={buttonClassName} onClick={() => onSort(sortKey)}>
        {label}
        {isActive && (direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
      </button>
    </th>
  );
};

const MarketTable: React.FC<MarketTableProps> = ({ coins, sortKey, sortDirection, onSort }) => {
  const router = useRouter();
  if (!coins) return <div>Loading coins...</div>;

  const handleRowClick = (coinId: string) => router.push(`/coins/${coinId}`);

  return (
    <div className="coin-list-card">
      <table className="coin-list-table">
        <thead>
          <tr>
            <SortableHeader label="#" sortKey="rank" currentSortKey={sortKey} direction={sortDirection} onSort={onSort} className="text-left" />
            <th className="text-left">Name</th>
            <SortableHeader label="Price" sortKey="current_price" currentSortKey={sortKey} direction={sortDirection} onSort={onSort} className="text-right" />
            <SortableHeader label="24h %" sortKey="price_change_percentage_24h" currentSortKey={sortKey} direction={sortDirection} onSort={onSort} className="text-right" />
            <SortableHeader label="Market Cap" sortKey="market_cap" currentSortKey={sortKey} direction={sortDirection} onSort={onSort} className="text-right" />
            <SortableHeader label="Volume (24h)" sortKey="total_volume" currentSortKey={sortKey} direction={sortDirection} onSort={onSort} className="text-right" />
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => {
            const isPositive = coin.price_change_percentage_24h >= 0;
            return (
              <tr key={coin.id} onClick={() => handleRowClick(coin.id)} className="cursor-pointer hover:bg-gray-800/50">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center">
                    <Image src={coin.image} alt={coin.symbol} width={24} height={24} className="coin-icon" />
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-gray-400 ml-2">{coin.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="text-right font-mono">{formatPrice(coin.current_price)}</td>
                <td className={`text-right font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="text-right font-mono">{formatLargeNumber(coin.market_cap)}</td>
                <td className="text-right font-mono">{formatLargeNumber(coin.total_volume)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;