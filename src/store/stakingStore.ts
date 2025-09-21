import { create } from 'zustand';

// Defines the shape of a single staked asset
export interface StakedPosition {
  id: string; // e.g., 'ethereum'
  amount: number;
}

// Defines the state and actions for our store
interface StakingState {
  positions: StakedPosition[];
  stake: (id: string, amount: number) => void;
  unstake: (id: string, amount: number) => void;
  getTotalStaked: (id: string) => number;
}

export const useStakingStore = create<StakingState>((set, get) => ({
  // Initial state: the user has not staked anything yet
  positions: [],

  // Action to add to a staked position
  stake: (id, amount) => set((state) => {
    const existingPosition = state.positions.find(p => p.id === id);
    if (existingPosition) {
      // If the user is already staking this asset, add to the amount
      const updatedPositions = state.positions.map(p => 
        p.id === id ? { ...p, amount: p.amount + amount } : p
      );
      return { positions: updatedPositions };
    } else {
      // If it's a new asset, add it to the positions array
      return { positions: [...state.positions, { id, amount }] };
    }
  }),

  // Action to remove from a staked position
  unstake: (id, amount) => set((state) => {
    const existingPosition = state.positions.find(p => p.id === id);
    if (!existingPosition) return state; // Can't unstake if not staked

    const newAmount = existingPosition.amount - amount;
    if (newAmount > 0) {
      // If there's a remaining balance, update the amount
      const updatedPositions = state.positions.map(p => 
        p.id === id ? { ...p, amount: newAmount } : p
      );
      return { positions: updatedPositions };
    } else {
      // If the balance is zero or less, remove the position entirely
      return { positions: state.positions.filter(p => p.id !== id) };
    }
  }),
  
  // A helper function to easily get the staked amount for a specific asset
  getTotalStaked: (id) => {
    const position = get().positions.find(p => p.id === id);
    return position ? position.amount : 0;
  }
}));