import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome, Coin List</span>
      </h4>

      <p>
        Coin List is an excellent source for tracking cryptocurrencies and
        digital assets worldwide.
      </p>

      {/* CARDS */}
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins?.slice(0, 3).map((data) => (
          <CardView data={data} />
        ))}
      </div>

      {/* TABLE */}
      <table className="table table-dark table-hover my-0 table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>price</th>
            <th>market cap</th>
            <th>trading volume</th>
            <th>%24h</th>
          </tr>
        </thead>

        <tbody>
          {coins?.map((coin) => (
            <tr  onClick={() => navigate(`/coin/${coin.id}`)}>
              <td >{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* BUTTON */}
      <div className="d-flex justify-content-center mt-4">
        <button
          onClick={() => setPage((page) => page + 1)}
          className="mx-4"
          id="more"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default MainPageView;
