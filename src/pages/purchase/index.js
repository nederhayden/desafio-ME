
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Supplier from "../../components/supplier";
import Addresses from "../../components/addresses";
import api from "../../services/api";

export default function PurchasePage() {

  // Criando o estado (State)
  const [header, setHeader] = useState();
  const [supplier, setSupplier] = useState();
  const [addresses, setAddresses] = useState();

  async function fetchData() {
    // Consumindo a API
    const response = await api.get("/orders/1");

    // Alimentando com os dados da API
    setHeader(response.data.header);
    setSupplier(response.data.supplier);
    setAddresses(response.data.addresses);
  }

  useEffect(() => fetchData(), []);

  return (
    <>
      {header && <Header headerInfo={header} />}
      {supplier && <Supplier supplierInfo={supplier} />}
      {addresses && <Addresses addressesInfo={addresses} />}
      
    </>
  );
}
