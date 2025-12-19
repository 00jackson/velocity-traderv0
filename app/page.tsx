"use client"
import { OrderBook } from "./components/orderBook"
import { OrdersPanel } from "./components/ordersPanel"
import { useMarketStore } from "./store/useMarketStore"

import { useEffect } from "react"

export default function Home() {
  const { marketData, selectedSymbol, setSelectedSymbol, loadMarketData, isLoading, error } =
    useMarketStore()

  useEffect(() => {
    loadMarketData()
  }, [loadMarketData])

  return (
    <main>
      <h2>Market</h2>
  
      {error && <div>{error}</div>}
  
      {isLoading ? (
        <div>Loading market data...</div>
      ) : (
        marketData.map(item => (
          <div
            key={item.symbol}
            onClick={() => setSelectedSymbol(item.symbol)}
            style={{
              cursor: "pointer",
              fontWeight:
                selectedSymbol === item.symbol ? "bold" : "normal",
            }}
          >
            {item.symbol} — {item.price}
          </div>
        ))
      )}
  
      <OrderBook />
      <OrdersPanel />
    </main>
  )
}