import React, { useState } from 'react';
import Layout from '../components/Layout';
import useSWR from 'swr';
import { useStakingStore } from '../store/stakingStore';
import type { StakeableAsset } from './api/stakeable-assets';
import Image from 'next/image';

// SWR fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// --- Staking Modal Component ---
const StakeModal: React.FC<{
  asset: StakeableAsset;
  mode: 'stake' | 'unstake';
  onClose: () => void;
  maxAmount: number;
}> = ({ asset, mode, onClose, maxAmount }) => {
  const [amount, setAmount] = useState('');
  const { stake, unstake } = useStakingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (!numericAmount || numericAmount <= 0) return;

    if (mode === 'stake') {
      stake(asset.id, numericAmount);
    } else {
      unstake(asset.id, numericAmount);
    }
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ backgroundColor: '#2a2a4a', padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textTransform: 'capitalize' }}>{mode} {asset.name}</h2>
        <form onSubmit={handleSubmit}>
          <p style={{ color: '#9ca3af', margin: '1rem 0' }}>Available to {mode}: {maxAmount.toFixed(2)} {asset.symbol}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            autoFocus
            style={{ width: '100%', padding: '12px', backgroundColor: '#303050', border: '1px solid #404060', borderRadius: '8px', color: 'white' }}
          />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: '12px', backgroundColor: '#4b5563', color: 'white', borderRadius: '8px', border: 'none' }}>Cancel</button>
            <button type="submit" style={{ flex: 1, padding: '12px', backgroundColor: '#6c63ff', color: 'white', borderRadius: '8px', border: 'none' }}>Confirm {mode}</button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- Asset Row Component ---
const AssetRow: React.FC<{ asset: StakeableAsset }> = ({ asset }) => {
  const [modalMode, setModalMode] = useState<'stake' | 'unstake' | null>(null);
  const totalStaked = useStakingStore(state => state.getTotalStaked(asset.id));
  
  // A mock wallet balance. In a real app, this would come from a user's data.
  const walletBalance = asset.symbol === 'ETH' ? 5 : 100;

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#2a2a4a', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Image src={asset.image} alt={asset.name} width={40} height={40} className="rounded-full" />
          <div>
            <p style={{ color: 'white', fontWeight: '600' }}>{asset.name}</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>APY: {asset.apy}%</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'white', fontWeight: '600' }}>{totalStaked.toFixed(4)} {asset.symbol}</p>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Staked</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setModalMode('stake')} style={{ padding: '8px 16px', backgroundColor: '#374151', color: 'white', borderRadius: '8px', border: 'none' }}>Stake</button>
          <button onClick={() => setModalMode('unstake')} disabled={totalStaked <= 0} style={{ padding: '8px 16px', backgroundColor: '#374151', color: 'white', borderRadius: '8px', border: 'none', opacity: totalStaked <= 0 ? 0.5 : 1 }}>Unstake</button>
        </div>
      </div>
      {modalMode && (
        <StakeModal 
          asset={asset} 
          mode={modalMode}
          onClose={() => setModalMode(null)}
          maxAmount={modalMode === 'stake' ? walletBalance : totalStaked}
        />
      )}
    </>
  );
};


// --- Main Staking Page ---
const StakingPage = () => {
  const { data: assets, error, isLoading } = useSWR<StakeableAsset[]>('/api/stakeable-assets', fetcher);

  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Staking & Earn</h1>
      </div>
      
      {isLoading && <p>Loading stakeable assets...</p>}
      {error && <p>Failed to load assets.</p>}
      
      {assets && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {assets.map(asset => <AssetRow key={asset.id} asset={asset} />)}
        </div>
      )}
    </Layout>
  );
};

export default StakingPage;