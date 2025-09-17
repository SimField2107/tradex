import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon?: string; 
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <div className="summary-card">
      <div className="summary-card-header">
        {/* Placeholder for an icon */}
        {icon && <span className="summary-icon">{icon}</span>}
        <h3 className="summary-title">{title}</h3>
      </div>
      <div className="summary-value">{value}</div>
    </div>
  );
};

export default SummaryCard;