import "./styles.css";
export default function Info({ search, coins }) {
  const filteredCoins = coins
    ? coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="coin__container flex">
      {filteredCoins.map((coin) => {
        const priceChange = coin.price_change_percentage_24h;
        return (
          <div className="coin__row flex">
            <div className="coin__info flex">
              <div className="coin flex">
                <img src={coin.image} className="coin__image" />
                <h1 className="coin__name">{coin.name}</h1>
              </div>
              <p className="coin__symbol">{coin.symbol.toUpperCase()}</p>
              <p className="coin__price">${coin.current_price.toFixed(2)}</p>
            </div>

            <div className="coin__data flex">
              <p className="coin__volume">
                ${coin.total_volume.toLocaleString()}
              </p>
              {priceChange > 0 ? (
                <p className="coin__percent green">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className="coin__percent red">{priceChange.toFixed(2)}%</p>
              )}
              <div className="coin__marketcap flex">
                <p>Mkt Cap</p>
                <p>${coin.market_cap.toLocaleString()}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
