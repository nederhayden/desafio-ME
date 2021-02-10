import React from "react";
import Card from "./Card.js";
import { DivAddresses, DivCard } from "../../components/addresses/style";

// import { Collapse } from "react-collapse";

// import { ReactComponent as DownArrow } from "../../assets/downarrow.svg";
import { ReactComponent as UpArrow } from "../../assets/uparrow.svg";

export default function Addresses({ addressesInfo }) {
  return (
    <DivAddresses>
      <span>
        <button type="button">
          <UpArrow fill="#028dcd" width="18" height="18" />
        </button>
        <h1>Addresses</h1>
      </span>

      <DivCard>
        {addressesInfo.map((address) => {
          return <Card title={address.label} name={address.name}></Card>;
        })}
      </DivCard>
    </DivAddresses>
  );
}
