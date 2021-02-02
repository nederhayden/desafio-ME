import React from "react";
import Card from "./Card.js";
import { DivAddresses, DivCard } from '../../components/addresses/style'

export default function Addresses({ addressesInfo }) {
  return (
    <DivAddresses>
      <h1>Addresses</h1>
      <DivCard>
        {addressesInfo.map((address) => {
          return <Card title={address.label} name={address.name}></Card>;
        })}
      </DivCard>
    </DivAddresses>
  );
}
