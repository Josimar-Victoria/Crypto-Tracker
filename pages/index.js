import { useState } from "react";
import CoinList from "../components/coinlist/CoinList";
import { Layout } from "../components/Layout";
import SearchBar from "../components/searchBar/SearchBar";

export default function Home({ filterdCoins }) {
  const [search, setSearch] = useState("");

  const allCoins = filterdCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlerChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  console.log(search)
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar onChange={handlerChange} type="text" placeholder="Search" />
        <CoinList filterdCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const filterdCoins = await res.json();

  return {
    props: {
      filterdCoins,
    },
  };
};
