import React from "react";
import styles from "../searchBar/SearchBar.module.css";
export default function SearchBar({ ...rest }) {
  
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest} />
    </div>
  );
}
