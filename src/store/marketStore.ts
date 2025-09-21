import { create } from 'zustand';

// Define the shape of the coin data we will be working with in the store
interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

// Define the state and the actions for our store
interface MarketState {
  searchTerm: string;
  sortKey: keyof Coin | 'rank'; // Allow sorting by coin properties or by rank
  sortDirection: 'asc' | 'desc';
  setSearchTerm: (term: string) => void;
  setSort: (key: keyof Coin | 'rank') => void;
}

// Create the store using Zustand's `create` function
const useMarketStore = create<MarketState>((set) => ({
  // 1. Initial State
  searchTerm: '',
  sortKey: 'market_cap', // Default sort by market cap
  sortDirection: 'desc',   // Default to descending order (highest first)

  // 2. Actions (functions to update the state)
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setSort: (key) => set((state) => {
    // If the user clicks the same column header again, reverse the sort direction
    if (state.sortKey === key) {
      return { sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc' };
    }
    // If they click a new column, set it as the new sort key and default to descending
    return { sortKey: key, sortDirection: 'desc' };
  }),
}));

export default useMarketStore;