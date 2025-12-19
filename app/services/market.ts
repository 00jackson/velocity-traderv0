import { MarketItem } from "../types/market"

export const mockMarketData: MarketItem[] = [
  { symbol: "AAPL", price: 189.12, change: 1.24 },
  { symbol: "TSLA", price: 248.77, change: -2.13 },
]

export async function getMarketData(): Promise<MarketItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockMarketData)
    }, 800)
  })
}