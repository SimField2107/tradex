import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import clsx from 'clsx';

interface Asset {
  name: string;
  symbol: string;
  logo: string;
  valueUSD: number;
  priceChange: number;
  sparkline: number[];
}

interface AssetsListProps {
  assets: Asset[];
}

const AssetsList: React.FC<AssetsListProps> = ({ assets }) => {
  return (
    <div className="assets-list-container">
      <h2 className="text-xl font-bold mb-4">Your Assets</h2>
      {/* THIS IS THE TEST: We are using an inline style attribute */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}> 
        {assets.map((asset) => (
          <AssetRow key={asset.symbol} asset={asset} />
        ))}
      </div>
    </div>
  );
};

const AssetRow: React.FC<{ asset: Asset }> = ({ asset }) => {
  // ... the rest of the AssetRow component remains exactly the same
  const isPositive = asset.priceChange >= 0;

  return (
    <div className="asset-card">
      <div className="asset-info">
        <Image 
          src={asset.logo} 
          alt={`${asset.name} logo`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="asset-details">
          <h3 className="font-bold text-white">{asset.name}</h3>
          <p className="text-sm text-gray-400">{asset.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="asset-chart-wrapper hidden md:block"></div>
      <div className="asset-value text-right">
        <p className="font-bold text-white">${asset.valueUSD.toLocaleString()}</p>
        <p className={clsx('text-sm', { 'text-green-400': isPositive, 'text-red-400': !isPositive })}>
          {isPositive ? '+' : ''}{asset.priceChange.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default AssetsList;