import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Card from "./Card.js";

function Addresses(props) {
  // const [data, setData] = useState([]);
  // const url = "https://me-frontend-challenge-api.herokuapp.com/orders/1";

  // useEffect(() => {
  //   axios.get(url).then((resp) => setData(resp.data.addresses));
  // }, []);

  return (
    <div className="Addresses">
      <h1>Addresses</h1>
      <div className="cards">
        {data.map((address) => {
          return <Card title={address.label} name={address.name}></Card>;
        })}
      </div>
    </div>
  );
}

export default Addresses;
