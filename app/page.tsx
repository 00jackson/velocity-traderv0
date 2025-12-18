import { marketData } from "./data/market"

export default function Home() {
  return (
    <main>
      <h1>Market Snapshot</h1>
      <ul>
        {marketData.map(item => (
          <li key={item.symbol}>
            {item.symbol} — {item.price} ({item.change}%)
          </li>
        ))}
      </ul>
    </main>
  )
}