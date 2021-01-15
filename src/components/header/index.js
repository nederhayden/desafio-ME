import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Header(props) {
  const [data, setData] = useState({});
  const url = "https://me-frontend-challenge-api.herokuapp.com/orders/1";

  useEffect(() => {
    axios.get(url).then((resp) => setData(resp.data.header));
  }, []);

  return (
    <div className="Header">
      <h1>HEADER</h1>
      <div className="ticket">
        <h3>Purchase Order</h3>
        <h2>{data.number}</h2>
        <h5>SerialME {data.serial}</h5>
      </div>

      {/* <div className="info">
        <h2>{data.buyer}</h2>
        <p>{data.contact.name}</p>
        <p>{data.contact.email}</p>
        <p>{data.contact.phone}</p>
        <p>{data.contact.fax}</p>
      </div> */}

      <div className="price">
        <h2>
          {data.currency} {data.price}
        </h2>
        <h3>{data.status}</h3>
        <h5>Created on {data.createdAt}</h5>
      </div>
    </div>
  );
}

export default Header;
