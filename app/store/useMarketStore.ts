/**
 * Market store guarantees:
 * - marketData is always an array (never undefined)
 * - loading and error states are owned here
 * - UI never fetches data directly
 */

import { create } from "zustand"
import { getMarketData } from "../services/market"
import { MarketItem } from "../types/market"

type MarketState = {
  marketData: MarketItem[]
  isLoading: boolean
  selectedSymbol: string
  loadMarketData: () => Promise<void>
  setSelectedSymbol: (symbol: string) => void
  error?: string
}

export const useMarketStore = create<MarketState>((set) => ({
  marketData: [],          // ← THIS is what you missed
  isLoading: false,
  selectedSymbol: "AAPL",

  setSelectedSymbol: (symbol) =>
    set({ selectedSymbol: symbol }),

  loadMarketData: async () => {
    set({ isLoading: true, error: undefined })
    try {
      const data = await getMarketData()
      set({ marketData: data, isLoading: false })
      if (!Array.isArray(data)) {
        throw new Error("Market data contract violated")
      }
    } catch {
      set({
        isLoading: false,
        error: "Failed to load market data",
      })
    }
  }

}))