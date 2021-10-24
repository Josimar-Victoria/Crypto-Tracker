/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../coins/Coins.module.css";
import Link from 'next/link';
export default function Coins({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChang,
  id,
}) {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
    <a>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <img src={image} alt={name} className={styles.coin_img} />
            <h1 className={styles.coin_h1}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.coin_data}>
            <p className={styles.coin_price}>${price}</p>
            <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

            {priceChang < 0 ? (
              <p className={(styles.coin_percent, styles.colorred)}>
                {priceChang.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.coin_percent, styles.colorgreen)}>
                {priceChang.toFixed(2)}%
              </p>
            )}

            <p className={styles.coin_marketcap}>
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </a>
  </Link>
  );
}
