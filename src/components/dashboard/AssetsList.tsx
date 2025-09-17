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

interface Asset {
  name: string;
  symbol: string;
  logo: string;
  valueUSD: number;
  valueBTC?: number;
  priceChange: number;
  sparkline: number[];
}

const MOCK_ASSETS: Asset[] = [
  { name: 'Bitcoin', symbol: 'BTC', logo: 'B', valueUSD: 195.06, valueBTC: 0.003, priceChange: 2.5, sparkline: [10, 12, 11, 15, 14, 16] },
  { name: 'Ethereum', symbol: 'ETH', logo: 'E', valueUSD: 514.02, valueBTC: 0.008, priceChange: -7.0, sparkline: [20, 18, 19, 17, 15, 12] },
];

const AssetsList = () => {
  const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { tooltip: { enabled: false }, legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { point: { radius: 0 }, line: { borderWidth: 2 } }
  };

  return (
    <div className="assets-list-container">
      <h2>Assets</h2>
      {MOCK_ASSETS.map(asset => (
        <div key={asset.symbol} className="asset-card">
          <div className="asset-info">
            <div className="asset-logo">{asset.logo}</div>
            <div className="asset-details">
              <h3>{asset.name}</h3>
              <p>{asset.symbol}</p>
            </div>
          </div>
          <div className="asset-chart-wrapper">
            <Line
              data={{
                labels: Array(asset.sparkline.length).fill(''),
                datasets: [{
                  data: asset.sparkline,
                  borderColor: asset.priceChange > 0 ? 'rgba(76, 175, 80, 1)' : 'rgba(255, 99, 132, 1)',
                  tension: 0.4,
                }],
              }}
              options={sparklineOptions}
            />
          </div>
          <div className="asset-value">
            <span className="usd-value">${asset.valueUSD.toFixed(2)}</span>
            <span className={`price-change ${asset.priceChange > 0 ? 'positive' : 'negative'}`}>{asset.priceChange > 0 ? '+' : ''}{asset.priceChange.toFixed(2)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetsList;