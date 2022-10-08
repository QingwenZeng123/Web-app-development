import { useState, useEffect } from "react";
import Entry from "./Entry";
import Info from "./Info";
import Title from "./Title";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState("");

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCoins(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App flex">
      <Title />
      <Entry action={setSearch} />
      <Info coins={coins} search={search} />
    </div>
  );
}

function bg() {
  return(
    <div style={{  backgroundImage: "background.png" }}>
    </div>
  );
}



export default App;
