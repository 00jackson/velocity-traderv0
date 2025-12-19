"use client"
import { OrderBook } from "./components/orderBook"
import { OrdersPanel } from "./components/ordersPanel"
import { marketData } from "./services/market"
import { useMarketStore } from "./store/useMarketStore"

export default function Home() {
  const { selectedSymbol, setSelectedSymbol } = useMarketStore()

  return (
    <main>
      <h2>Market</h2>
      {marketData.map(item => (
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
      ))}
      <OrderBook />
      <OrdersPanel />
    </main>
  )
}