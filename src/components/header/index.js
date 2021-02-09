import React from "react";
import {
  DivHeader,
  Ticket,
  InfoPerson,
  Price,
  DivTicket,
  DivTicketPerson,
} from "../../components/header/styles";

// OTIMIZAR ISSO: Descobrir como chamar todos os SVG de uma vez só 
import { ReactComponent as Persons } from "../../assets/persons.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Fax } from "../../assets/fax.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";

import moment from "moment";

export default function Header({ headerInfo }) {
  const creatDate = moment(headerInfo.createdAt).format("L");

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
            {/* PASSAR A ESTILIZACAO PARA O STYLE: Descobrir como estilizar no styled-component */}
            <Persons fill="#028dcd" width="18" height="18" />{" "}
            {headerInfo.contact.name}{" "}
            <Info fill="#028dcd" width="18" height="18" />
          </p>

          <ul>
            <p>
              <Email fill="#028dcd" width="18" height="18" />{" "}
              {headerInfo.contact.email}
            </p>

            <p>
              <Phone fill="#028dcd" width="18" height="18" />{" "}
              {headerInfo.contact.phone}
            </p>

            <p>
              <Fax fill="#028dcd" width="18" height="18" />{" "}
              {headerInfo.contact.fax}
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
        <h5>Created on {creatDate}</h5>
      </Price>
    </DivHeader>
  );
}
