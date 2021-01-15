import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Addresses(props) {
  const [data, setData] = useState([]);
  const url = "https://me-frontend-challenge-api.herokuapp.com/orders/1";

  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data.addresses));
  }, []);

  return (
    <div className="Addresses">
      <h1>ADDRESSES</h1>
      {data.map((address) => {
        return <li>{address.name}</li>;
      })}
    </div>
  );
}

export default Addresses;
