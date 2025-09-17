import React from 'react';

const TotalBalanceCard = () => {
  return (
    <div className="total-balance-card">
      <div className="total-balance-header">
        <span className="label">Total Balance</span>
      </div>
      <div className="total-balance-value">
        <span className="currency">$40,295.32</span>
        <span className="change">+5.5%</span>
      </div>
    </div>
  );
};

export default TotalBalanceCard;