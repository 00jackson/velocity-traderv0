"use client"

import { useEffect, useMemo } from "react"
import { useMarketStore } from "@/store/useMarketStore"

export default function Home() {
  const {
    marketData,
    loading,
    error,
    fetchMarketData,
    selectedSymbol,
    setSelectedSymbol,
  } = useMarketStore()

  useEffect(() => {
    fetchMarketData()
  }, [fetchMarketData])

  const topMovers = useMemo(() => {
    return [...marketData]
      .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
      .slice(0, 5)
  }, [marketData])

  if (loading) return <div>Loading market data...</div>
  if (error) return <div>{error}</div>
  if (marketData.length === 0) return <div>No data available</div>

  return (
    <div>
      <h2>Selected Symbol: {selectedSymbol ?? "None"}</h2>

      {marketData.map((item) => (
        <div
          key={item.symbol}
          onClick={() => setSelectedSymbol(item.symbol)}
        >
          {item.symbol} — {item.price}
        </div>
      ))}

      <h2>Top Movers</h2>
      <ul>
        {topMovers.map((item) => (
          <li key={item.symbol}>
            {item.symbol} — {item.price} ({item.change > 0 ? "+" : ""}
            {item.change}%)
          </li>
        ))}
      </ul>
    </div>
  )
}