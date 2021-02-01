import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Supplier(props) {
  // const [data, setData] = useState({});
  // const url = "https://me-frontend-challenge-api.herokuapp.com/orders/1";

  // useEffect(() => {
  //   axios.get(url).then((resp) => setData(resp.data.supplier));
  // }, []);

  return (
    <div className="Supplier">
      <div id="Column1">
        <h1>Column1</h1>
        <h3>Supplier</h3>
        <div className="Row">
          <p>{data.name}</p>
          <div className="Code">
            <p>Code #{data.code}</p>
          </div>
        </div>
        {/* <p>{data.document.value}</p> */}
        <p>{data.address}</p>
      </div>

      <div id="Column2">
        <h1>Column2</h1>
        {/* {data.contact.name} */}
        {/* {data.contact.email} */}
        {/* {data.contact.phone} */}
        {/* {data.contact.fax} */}
      </div>

      <div id="Column3">
        <h1>Column3</h1>
        <p>Read: {data.readAt}</p>
        <p>Last Reply: {data.lastReplyAt}</p>
      </div>
    </div>
  );
}

export default Supplier;
