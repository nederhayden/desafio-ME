import React from "react";
import "./style.css";

export default function Header({ headerInfo,}) {
  return (
    <header className="Header">
      <div className="ticket">
        <p>Purchase Order</p>
        <h2>{headerInfo.number}</h2>
        <p>SerialME {headerInfo.serial}</p>
      </div>

      <div className="info">
        <h2>{headerInfo.buyer}</h2>
        <p>{headerInfo.contact.name}</p>
        <p>{headerInfo.contact.email}</p>
        <p>{headerInfo.contact.phone}</p>
        <p>{headerInfo.contact.fax}</p>
      </div>

      <div className="price">
        <h2>
          {headerInfo.currency} {headerInfo.price}
        </h2>
        <h3>{headerInfo.status}</h3>
        <h5>Created on {headerInfo.createdAt}</h5>
      </div>
    </header>
  );
}
