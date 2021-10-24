import React from "react";

import Coins from "../coins/Coins";
export default function CoinList({ filterdCoins }) {
  return (
    <>
      {filterdCoins?.map((coin) => (
        <Coins
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          volume={coin.total_volume}
          image={coin.image}
          priceChang={coin.price_change_percentage_24h}
          id={coin.id}
        />
      ))}
    </>
  );
}
