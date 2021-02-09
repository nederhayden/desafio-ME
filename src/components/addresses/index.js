import React, { useState, useRef } from "react";
import Card from "./Card.js";
import { DivAddresses, DivCard } from "../../components/addresses/style";

// import { Collapse } from "react-collapse";

// import { ReactComponent as DownArrow } from "../../assets/downarrow.svg";
import { ReactComponent as UpArrow } from "../../assets/uparrow.svg";

export default function Addresses({ addressesInfo }) {
  const [showDown, showDownState] = useState("");
  const [setHeight, setHeightState] = useState("");

  const content = useRef(null);

  function toggle() {
    showDownState(showDown === "" ? "active" : "");
    setHeightState(
      setHeight === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <DivAddresses>
      <span>
        <button type="button" className={`${showDown}`} onClick={toggle}>
          <UpArrow fill="#028dcd" width="18" height="18" />
        </button>
        <h1>Addresses</h1>
      </span>

      <DivCard ref={content} style={{maxHeight: `${setHeight}`}}>
        {addressesInfo.map((address) => {
          return <Card title={address.label} name={address.name}></Card>;
        })}
      </DivCard>
    </DivAddresses>
  );
}
