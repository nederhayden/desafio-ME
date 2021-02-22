import React from "react";
import {
  DivHeader,
  Ticket,
  InfoPerson,
  Price,
  DivTicket,
  DivTicketPerson,
  DivSpan,
  DivWrapper,
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
            <p>{`SerialME ${headerInfo.serial}`}</p>
          </DivTicket>
        </Ticket>

        <InfoPerson>
          <h1>{headerInfo.buyer}</h1>

          <p>
            <DivWrapper>
              <Persons fill="#028dcd" width="18" height="18" />
              <DivSpan>{headerInfo.contact.name}</DivSpan>
              <DivSpan>
                <Info fill="#028dcd" width="18" height="18" />
              </DivSpan>
            </DivWrapper>
          </p>

          <ul>
            <p>
              <DivWrapper>
                <Email fill="#028dcd" width="18" height="18" />
                <DivSpan>{headerInfo.contact.email}</DivSpan>
              </DivWrapper>
            </p>

            <p>
              <DivWrapper>
                <Phone fill="#028dcd" width="18" height="18" />
                <DivSpan>{headerInfo.contact.phone}</DivSpan>
              </DivWrapper>
            </p>

            <p>
              <DivWrapper>
                <Fax fill="#028dcd" width="18" height="18" />
                <DivSpan>{headerInfo.contact.fax}</DivSpan>
              </DivWrapper>
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
        <h2>{headerInfo.status}</h2>
        <h3>{`Created on ${creatDate}`}</h3>
      </Price>
    </DivHeader>
  );
}
