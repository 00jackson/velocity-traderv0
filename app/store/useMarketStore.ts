import { create } from "zustand"
import { getMarketData } from "../services/market"
import { MarketItem } from "../types/market"

type MarketState = {
  marketData: MarketItem[]
  isLoading: boolean
  selectedSymbol: string
  loadMarketData: () => Promise<void>
  setSelectedSymbol: (symbol: string) => void
}

export const useMarketStore = create<MarketState>((set) => ({
  marketData: [],          // ← THIS is what you missed
  isLoading: false,
  selectedSymbol: "AAPL",

  setSelectedSymbol: (symbol) =>
    set({ selectedSymbol: symbol }),

  loadMarketData: async () => {
    set({ isLoading: true })
    const data = await getMarketData()
    set({ marketData: data, isLoading: false })
  },
}))