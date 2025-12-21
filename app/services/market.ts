/**
 * ⚠️ CONTRACT:
 * - This file must only export functions
 * - UI must never import from services directly
 * - State layer is the only consumer
 */

import { MarketItem } from "../../types/market"

export const mockMarketData: MarketItem[] = [
  { symbol: "AAPL", price: 189.12, change: 1.24, volume: 120000 },
  { symbol: "TSLA", price: 248.77, change: -2.13, volume: 98000 },
]

export async function getMarketData(): Promise<MarketItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockMarketData)
    }, 1000)
  })
}

function generateMarketData(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    symbol: `STOCK_${i}`,
    price: Math.random() * 1000,
    change: (Math.random() - 0.5) * 10,
  }))
}