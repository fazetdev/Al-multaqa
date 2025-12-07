'use client';

import { create } from 'zustand';

interface LanguageState {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  toggleLanguage: () => set((state) => ({
    language: state.language === 'en' ? 'ar' : 'en'
  })),
}));
