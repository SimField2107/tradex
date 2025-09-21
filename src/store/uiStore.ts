import { create } from 'zustand';

interface UiState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMenuOpen: false, // The menu is closed by default
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));