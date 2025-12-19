import { create } from "zustand"

type MarketState = {
  selectedSymbol: string
  setSelectedSymbol: (symbol: string) => void
}

export const useMarketStore = create<MarketState>(set => ({
  selectedSymbol: "AAPL",
  setSelectedSymbol: symbol => set({ selectedSymbol: symbol }),
}))