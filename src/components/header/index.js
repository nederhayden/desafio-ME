import React from "react";
import {
  DivHeader,
  Ticket,
  InfoPerson,
  Price,
  DivTicket,
  DivPerson,
  DivPrice,
  Wrapper
} from "../../components/header/styles";

export default function Header({ headerInfo }) {
  return (
    <DivHeader>
      <Wrapper>
        <Ticket>
          <DivTicket>
            <h2>Purchase Order</h2>
            <h3>{headerInfo.number}</h3>
            <p>SerialME {headerInfo.serial}</p>
          </DivTicket>
        </Ticket>

        <InfoPerson>
          {/* <DivPerson> */}
          <h1>{headerInfo.buyer}</h1>

          <p>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1040/1040056.svg?token=exp=1612296597~hmac=1ecebc12867d127513da0abfc2d9abfd"
              alt=""
            />{" "}
            {headerInfo.contact.name}{" "}
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/157/157933.svg?token=exp=1612296884~hmac=d767015e1169d516f78734c4a14b6fd9"
              alt=""
            />
          </p>

          <ul>
            <p>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/520/520648.svg?token=exp=1612296843~hmac=58ea4fcff3f363547056207349f97f59"
                alt=""
              />{" "}
              {headerInfo.contact.email}
            </p>

            <p>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/2947/2947981.svg?token=exp=1612296955~hmac=6cdafae1d12cf2fd2cada0081a62d49b"
                alt=""
              />{" "}
              {headerInfo.contact.phone}
            </p>

            <p>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/2258/2258932.svg?token=exp=1612297009~hmac=a05ad554c3ea13489c78aebeb885061a"
                alt=""
              />{" "}
              {headerInfo.contact.fax}
            </p>
          </ul>
          {/* </DivPerson> */}
        </InfoPerson>
      </Wrapper>

      <Price>
        {/* <DivPrice> */}
        <h1>
          {headerInfo.currency} {headerInfo.price}
        </h1>
        <h3>{headerInfo.status}</h3>
        <h5>Created on {headerInfo.createdAt}</h5>
        {/* </DivPrice> */}
      </Price>
    </DivHeader>
  );
}
