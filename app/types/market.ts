
export type MarketItem = {
    symbol: string
    price: number
    change: number
  }
  
  export type OrderBookLevel = {
    price: number
    size: number
  }
  
  export type OrderBook = {
    bids: OrderBookLevel[]
    asks: OrderBookLevel[]
  }
  
  export type OrderSide = "BUY" | "SELL"
  
  export type OrderStatus = "OPEN" | "FILLED"
  
  export type Order = {
    id: string
    symbol: string
    side: OrderSide
    price: number
    quantity: number
    status: OrderStatus
  }