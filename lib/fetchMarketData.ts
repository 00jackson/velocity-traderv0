import { MarketItem } from "@/types/market"

export async function fetchMarketDataAPI(): Promise<MarketItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { symbol: "AAPL", price: 190, change: 1.2, volume: 120000 },
        { symbol: "TSLA", price: 250, change: -2.1 ,volume: 89000},
        { symbol: "GOOG", price: 140, change: 0.4, volume: 98000 },
        // add 7+ more
      ])
    }, 1500)
  })
}