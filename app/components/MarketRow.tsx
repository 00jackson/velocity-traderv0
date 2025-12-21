import React from "react"

type Props = {
    symbol: string
    price: number
    isSelected: boolean
    onSelect: (symbol: string) => void
  }
  
  function MarketRowComponent({
    symbol,
    price,
    isSelected,
    onSelect,
  }: Props) {
    return (
      <div
        onClick={() => onSelect(symbol)}
        style={{
          cursor: "pointer",
          fontWeight: isSelected ? "bold" : "normal",
        }}
      >
        {symbol} — {price}
      </div>
    )
  }
  export const MarketRow = React.memo(MarketRowComponent)