import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import Model from "../models/DetailModel";
const DetailController = () => {
  // create example from Model
  const [coin, setCoin] = useState(null);
  // get id
  const { id } = useParams();

  // get coin details and price history
  useEffect(() => {
    Model.getCoinDetails(id).then((data) => setCoin(data));
  }, []);

  const model = new Model(coin);

  return (
    <div>
      <DetailView model={model} />
    </div>
  );
};

export default DetailController;
