import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Supplier(props) {
  const [data, setData] = useState({});
  const url = "https://me-frontend-challenge-api.herokuapp.com/orders/1";

  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data.supplier));
  }, []);

  return (
    <div className="Supplier">
      <h1>SUPPLIER</h1>
      {data.name}
    </div>
  );
}

export default Supplier;
