"use client"

import { useEffect, useMemo, useState } from "react"
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

  // ✅ LOCAL FILTER STATE (inside component)
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [direction, setDirection] = useState<"all" | "up" | "down">("all")
  const [minVolume, setMinVolume] = useState<number | null>(null)

  useEffect(() => {
    fetchMarketData()
  }, [fetchMarketData])

  // ✅ DERIVED FILTERED DATA
  const filteredData = useMemo(() => {
    return marketData.filter((item) => {
      if (minPrice !== null && item.price < minPrice) return false
      if (maxPrice !== null && item.price > maxPrice) return false

      if (direction === "up" && item.change <= 0) return false
      if (direction === "down" && item.change >= 0) return false

      if (minVolume !== null && (item.volume ?? 0) < minVolume) return false

      return true
    })
  }, [marketData, minPrice, maxPrice, direction, minVolume])

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

      {/* RENDER FILTERED DATA */}
      {filteredData.map((item) => (
        <div
          key={item.symbol}
          onClick={() => setSelectedSymbol(item.symbol)}
          style={{
            cursor: "pointer",
            fontWeight: selectedSymbol === item.symbol ? "bold" : "normal",
          }}
        >
          {item.symbol} — {item.price}
        </div>
      ))}

      <h2>Top Movers</h2>
      <ul>
        {topMovers.map((item) => (
          <li key={item.symbol}>
            {item.symbol} — {item.price} (
            {item.change > 0 ? "+" : ""}
            {item.change}%)
          </li>
        ))}
      </ul>
    </div>
  )
}