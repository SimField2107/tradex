// src/components/dashboard/WalletPage.tsx
import { useState, useEffect } from 'react';
import WalletHeader from '../components/dashboard/WalletHeader';
import AssetsList from '../components/dashboard/AssetsList';
import { fetchCoinMarkets } from '../services/cryptoService';

const WalletPage = () => {
  const [totalBalance, setTotalBalance] = useState<number | null>(null);
  const [balanceChange, setBalanceChange] = useState<number | null>(null);
  const [assets, setAssets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWalletData = async () => {
      try {
        const coinData = await fetchCoinMarkets();
        
        // Filter for specific assets to simulate a user's portfolio
        const btc = coinData.find((coin: any) => coin.symbol === 'btc');
        const eth = coinData.find((coin: any) => coin.symbol === 'eth');

        if (btc && eth) {
          // Mock a portfolio with 0.1 BTC and 2 ETH
          const btcValue = btc.current_price * 0.1;
          const ethValue = eth.current_price * 2;
          const currentTotal = btcValue + ethValue;
          
          // Calculate a simulated previous value for balance change
          const btcPrevValue = (btc.current_price - btc.price_change_24h) * 0.1;
          const ethPrevValue = (eth.current_price - eth.price_change_24h) * 2;
          const previousTotal = btcPrevValue + ethPrevValue;

          setTotalBalance(currentTotal);
          setBalanceChange(currentTotal - previousTotal);

          // Update assets list with live data
          const updatedAssets = [
            {
              name: btc.name,
              symbol: btc.symbol.toUpperCase(),
              logo: 'B',
              valueUSD: btc.current_price,
              priceChange: btc.price_change_percentage_24h,
              sparkline: btc.sparkline_in_7d.price,
            },
            {
              name: eth.name,
              symbol: eth.symbol.toUpperCase(),
              logo: 'E',
              valueUSD: eth.current_price,
              priceChange: eth.price_change_percentage_24h,
              sparkline: eth.sparkline_in_7d.price,
            },
          ];
          setAssets(updatedAssets);
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch wallet data:', err);
        setIsLoading(false);
      }
    };

    getWalletData();
  }, []);

  if (isLoading) {
    return <div className="wallet-page-container">Loading...</div>;
  }

  if (totalBalance === null || balanceChange === null) {
    return <div className="wallet-page-container">Error fetching data.</div>;
  }

  return (
    <div className="wallet-page-container">
      <WalletHeader totalBalance={totalBalance} balanceChange={balanceChange} />
      <AssetsList assets={assets} />
    </div>
  );
};

export default WalletPage;