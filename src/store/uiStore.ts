import { create } from 'zustand';

interface UiState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  pageTitle: string; 
  setPageTitle: (title: string) => void; 
}

export const useUiStore = create<UiState>((set) => ({
  isMenuOpen: false,
  pageTitle: 'Dashboard', // Default title
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setPageTitle: (title) => set({ pageTitle: title }),
}));