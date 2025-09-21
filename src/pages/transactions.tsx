import useSWR from 'swr';
import Layout from '../components/Layout';
import type { Transaction } from './api/transactions'; 
import { format } from 'date-fns';
import clsx from 'clsx'; 

// SWR needs a "fetcher" function to know how to get the data.
// This simple function uses the browser's fetch API to get our JSON.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TransactionRowSkeleton = () => (
  <tr className="animate-pulse">
    <td className="p-4"><div className="h-4 bg-gray-700 rounded w-24"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-700 rounded w-16"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-700 rounded w-32"></div></td>
    <td className="p-4 text-right"><div className="h-4 bg-gray-700 rounded w-20 ml-auto"></div></td>
    <td className="p-4 text-right"><div className="h-4 bg-gray-700 rounded w-28 ml-auto"></div></td>
    <td className="p-4 text-right"><div className="h-4 bg-gray-700 rounded w-24 ml-auto"></div></td>
  </tr>
);

const TransactionsPage = () => {
  // The useSWR hook:
  // 1. It takes a "key" (our API endpoint URL).
  // 2. It takes our "fetcher" function.
  // 3. It returns the data, an error object, and a boolean for loading state.
  const { data: transactions, error, isLoading } = useSWR<Transaction[]>('/api/transactions', fetcher);

  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Transaction History</h1>
      </div>

      <div className="coin-list-card"> {/* Reusing the card style from the dashboard */}
        <table className="coin-list-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Asset</th>
              <th className="text-right">Amount</th>
              <th className="text-right">Value (USD)</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* 1. If the data is loading, show a skeleton UI */}
            {isLoading && Array.from({ length: 5 }).map((_, i) => <TransactionRowSkeleton key={i} />)}
            
            {/* 2. If there's an error, show an error message */}
            {error && <tr><td colSpan={6} className="text-center p-8 text-red-400">Failed to load transactions.</td></tr>}

            {/* 3. If data has loaded, map over it and display it */}
            {transactions?.map((tx) => (
              <tr key={tx.id}>
                <td>{format(new Date(tx.date), 'dd MMM yyyy')}</td>
                <td className={clsx({
                  'text-green-400': tx.type === 'Buy' || tx.type === 'Deposit',
                  'text-red-40á00': tx.type === 'Sell' || tx.type === 'Withdrawal',
                })}>
                  {tx.type}
                </td>
                <td>{tx.asset.name} ({tx.asset.symbol})</td>
                <td className="text-right">{tx.amount.toFixed(4)} {tx.asset.symbol}</td>
                <td className="text-right">${tx.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="text-right">
                  <span className={clsx('px-2 py-1 text-xs font-semibold rounded-full', {
                    'bg-green-500/20 text-green-400': tx.status === 'Completed',
                    'bg-yellow-500/20 text-yellow-400': tx.status === 'Pending',
                    'bg-red-500/20 text-red-400': tx.status === 'Failed',
                  })}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default TransactionsPage;