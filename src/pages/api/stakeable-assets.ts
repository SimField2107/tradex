import type { NextApiRequest, NextApiResponse } from 'next';

export interface StakeableAsset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  apy: number; // Annual Percentage Yield
}

const stakeableAssets: StakeableAsset[] = [
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', apy: 4.5 },
  { id: 'solana', name: 'Solana', symbol: 'SOL', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', apy: 7.2 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', apy: 3.8 },
  { id: 'avalanche-2', name: 'Avalanche', symbol: 'AVAX', image: 'https://assets.coingecko.com/coins/images/12559/large/avalanche-avax-logo.png', apy: 8.1 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StakeableAsset[]>
) {
  // Simulate a network delay
  setTimeout(() => {
    res.status(200).json(stakeableAssets);
  }, 600);
}