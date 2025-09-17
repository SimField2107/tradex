import React from 'react';
import WalletHeader from './WalletHeader';
import AssetsList from './AssetsList';

const WalletPage = () => {
  return (
    <div className="wallet-page-container">
      <WalletHeader totalBalance={10544.00} balanceChange={-545} />
      <AssetsList />
    </div>
  );
};

export default WalletPage;