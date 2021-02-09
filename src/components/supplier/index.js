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

// OTIMIZAR ISSO: Descobrir como chamar todos os SVG de uma vez só 
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Fax } from "../../assets/fax.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Backarrow } from "../../assets/backarrow.svg";

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
              {/* PASSAR A ESTILIZACAO PARA O STYLE: Descobrir como estilizar no styled-component */}
              <User width="18" height="18"/> {supplierInfo.contact.name} -{" "}
              <p1>{supplierInfo.contact.email}</p1>
            </p>
          </span>
        </DivNameEmail>

        <DivPhoneFax>
          <span>
            <p>
              <Phone width="18" height="18"/> {supplierInfo.contact.phone} -{" "}
              <Fax width="18" height="18"/> {supplierInfo.contact.fax}
            </p>
          </span>
        </DivPhoneFax>
      </DivContainer2>

      <DivContainer3>
        <span>
          <p>
            <Eye width="18" height="18"/> Read: {formattedDate}
          </p>
          <p1>
            <Backarrow width="18" height="18"/> Last Reply: {formattedDate2}
          </p1>
        </span>
      </DivContainer3>
    </DivSupplier>
  );
}
