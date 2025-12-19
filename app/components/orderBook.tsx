import { orderBook } from "../data/orderBook"
import { useMarketStore } from "../store/useMarketStore"

export function OrderBook() {
    const { selectedSymbol } = useMarketStore()
    return (
        <section>
            <h2>Order Book — {selectedSymbol}</h2>

            <div style={{ display: "flex", gap: "40px" }}>
                <div>
                    <h3>Bids</h3>
                    {orderBook.bids.map((bid, i) => (
                        <div key={i}>
                            {bid.price} — {bid.size}
                        </div>
                    ))}
                </div>

                <div>
                    <h3>Asks</h3>
                    {orderBook.asks.map((ask, i) => (
                        <div key={i}>
                            {ask.price} — {ask.size}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}