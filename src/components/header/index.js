import React from "react";
import {
  DivHeader,
  Ticket,
  InfoPerson,
  Price,
  DivTicket,
  DivTicketPerson,
} from "../../components/header/styles";

import persons from "../../assets/persons.png";
import email from "../../assets/email.png";
import fax from "../../assets/fax.png";
import info from "../../assets/info.png";
import phone from "../../assets/phone.png";

import moment from "moment";

export default function Header({ headerInfo }) {
  const date = headerInfo.createdAt;
  const formattedDate = moment(date).format("L");

  return (
    <DivHeader>
      <DivTicketPerson>
        <Ticket>
          <DivTicket>
            <h2>Purchase Order</h2>
            <h3>{headerInfo.number}</h3>
            <p>SerialME {headerInfo.serial}</p>
          </DivTicket>
        </Ticket>

        <InfoPerson>
          <h1>{headerInfo.buyer}</h1>

          <p>
            <img src={persons} alt="" /> {headerInfo.contact.name}{" "}
            <img src={info} alt="" />
          </p>

          <ul>
            <p>
              <img src={email} alt="" /> {headerInfo.contact.email}
            </p>

            <p>
              <img src={phone} alt="" /> {headerInfo.contact.phone}
            </p>

            <p>
              <img src={fax} alt="" /> {headerInfo.contact.fax}
            </p>
          </ul>
        </InfoPerson>
      </DivTicketPerson>

      <Price>
        <h1>
          {headerInfo.currency}{" "}
          {headerInfo.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </h1>
        <h3>{headerInfo.status}</h3>
        <h5>Created on {formattedDate}</h5>
      </Price>
    </DivHeader>
  );
}
