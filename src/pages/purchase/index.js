import "./style.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
// import Supplier from "../../components/supplier";
// import Addresses from "../../components/addresses";
import api from "../../services/api";

export default function PurchasePage() {
  const [header, setHeader] = useState();
  // const [supplier, setSupplier] = useState();
  // const [addrresses, setAddresses] = useState();

  async function fetchData() {
    const response = await api.get("/orders/1"); 
    setHeader(response.data.header);
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      {header && <Header headerInfo={header} />}
      {/* <Supplier /> */}
      {/* <Addresses /> */}
    </>
  );
}
