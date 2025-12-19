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
    } catch {
      set({
        isLoading: false,
        error: "Failed to load market data",
      })
    }
  }

}))