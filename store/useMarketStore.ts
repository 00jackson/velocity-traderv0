/**
 * Market store guarantees:
 * - marketData is always an array (never undefined)
 * - loading and error states are owned here
 * - UI never fetches data directly
 */

import { create } from "zustand"
import { MarketItem } from "@/types/market"
import { fetchMarketDataAPI } from "@/lib/fetchMarketData"

type MarketState = {
  marketData: MarketItem[]
  loading: boolean
  error: string | null
  selectedSymbol: string | null
  setSelectedSymbol: (symbol: string) => void

  fetchMarketData: () => Promise<void>
}

export const useMarketStore = create<MarketState>((set) => ({
  marketData: [],
  loading: false,
  error: null,

  selectedSymbol: null,
  setSelectedSymbol: (symbol) => set({ selectedSymbol: symbol }),

  fetchMarketData: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchMarketDataAPI()
      set({ marketData: data, loading: false })
    } catch {
      set({ error: "Failed to fetch market data", loading: false })
    }
  },
}))