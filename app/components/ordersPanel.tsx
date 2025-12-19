import { openOrders, filledOrders } from "../data/orders"

export function OrdersPanel() {
  return (
    <section>
      <h2>Orders</h2>

      <h3>Open Orders</h3>
      {openOrders.map(order => (
        <div key={order.id}>
          {order.symbol} | {order.side} | {order.price} | {order.quantity} |{" "}
          {order.status}
        </div>
      ))}

      <h3>Filled Orders</h3>
      {filledOrders.map(order => (
        <div key={order.id}>
          {order.symbol} | {order.side} | {order.price} | {order.quantity} |{" "}
          {order.status}
        </div>
      ))}
    </section>
  )
}