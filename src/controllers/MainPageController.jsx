import MainPageView from "../views/MainPageView";
import Model from "../models/MainPageModel";
import { useEffect, useState } from "react";

const MainPageController = () => {
  // Data List State
  const [coins, setCoins] = useState([]);
  // more table
  const [page, setPage] = useState(1);

  useEffect(() => {
    Model.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);

  return (
    <div>
      <MainPageView setPage={setPage} coins={coins} />
    </div>
  );
};

export default MainPageController;
