import type { NextApiRequest, NextApiResponse } from 'next';

export interface Transaction {
  id: string;
  date: string;
  type: 'Buy' | 'Sell' | 'Withdrawal' | 'Deposit';
  asset: {
    name: string;
    symbol: string;
  };
  amount: number;
  value: number;
  status: 'Completed' | 'Pending' | 'Failed';
}

// A sample list of transactions.
const transactions: Transaction[] = [
  { id: '1', date: '2025-09-20', type: 'Buy', asset: { name: 'Bitcoin', symbol: 'BTC' }, amount: 0.05, value: 3500.00, status: 'Completed' },
  { id: '2', date: '2025-09-18', type: 'Buy', asset: { name: 'Ethereum', symbol: 'ETH' }, amount: 1.2, value: 4800.00, status: 'Completed' },
  { id: '3', date: '2025-09-17', type: 'Sell', asset: { name: 'Bitcoin', symbol: 'BTC' }, amount: 0.02, value: 1450.50, status: 'Completed' },
  { id: '4', date: '2025-09-15', type: 'Deposit', asset: { name: 'USD Coin', symbol: 'USDC' }, amount: 1000, value: 1000.00, status: 'Completed' },
  { id: '5', date: '2025-09-14', type: 'Withdrawal', asset: { name: 'USD Coin', symbol: 'USDC' }, amount: 500, value: 500.00, status: 'Pending' },
  { id: '6', date: '2025-09-12', type: 'Buy', asset: { name: 'Solana', symbol: 'SOL' }, amount: 10, value: 450.00, status: 'Completed' },
  { id: '7', date: '2025-09-11', type: 'Sell', asset: { name: 'Ethereum', symbol: 'ETH' }, amount: 0.5, value: 2100.00, status: 'Failed' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  // Simulate a network delay of 800ms to test our loading UI
  setTimeout(() => {
    res.status(200).json(transactions);
  }, 800);
}