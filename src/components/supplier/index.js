import React from "react";
import {
  DivSupplier,
  DivContainer,
  DivRow,
  DivCode,
  DivValue,
  DivContainer2,
  DivContainer3,
  DivNameEmail,
  DivPhoneFax,
} from "../../components/supplier/style";

import user from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import fax from "../../assets/fax.svg";
import eye from "../../assets/eye.svg";
import backarrow from "../../assets/backarrow.svg";

import moment from "moment";

export default function Supplier({ supplierInfo }) {
  const date = supplierInfo.readAt;
  const date2 = supplierInfo.lastReplyAt;
  const formattedDate = moment(date).format("L hh:mm");
  const formattedDate2 = moment(date2).format("L hh:mm");

  return (
    <DivSupplier>
      <DivContainer>
        <h3>Supplier</h3>
        <DivRow>
          <p>{supplierInfo.name}</p>
          <DivCode>
            <p>Code #{supplierInfo.code}</p>
          </DivCode>
        </DivRow>
        <DivValue>
          <p>{supplierInfo.document.value}</p>
        </DivValue>
        <p>{supplierInfo.address}</p>
      </DivContainer>

      <DivContainer2>
        <DivNameEmail>
          <span>
            <p>
              <img src={user} alt="" /> {supplierInfo.contact.name} -{" "}
            </p>
            <p1>{supplierInfo.contact.email}</p1>
          </span>
        </DivNameEmail>
        <DivPhoneFax>
          <span>
            <p>
              <img src={phone} alt="" /> {supplierInfo.contact.phone} -
            </p>
            <p>
              <img src={fax} alt="" /> {supplierInfo.contact.fax}
            </p>
          </span>
        </DivPhoneFax>
      </DivContainer2>

      <DivContainer3>
        <span>
          <p>
            <img src={eye} alt="" /> Read: {formattedDate}
          </p>
          <p1>
            <img src={backarrow} alt="" /> Last Reply: {formattedDate2}
          </p1>
        </span>
      </DivContainer3>
    </DivSupplier>
  );
}
