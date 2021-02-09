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
  DivSpan,
  DivWrapper,
} from "../../components/supplier/style";

// OTIMIZAR ISSO: Descobrir como chamar todos os SVG de uma vez só
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Fax } from "../../assets/fax.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Backarrow } from "../../assets/backarrow.svg";

import moment from "moment";

export default function Supplier({ supplierInfo }) {
  const readDate = moment(supplierInfo.readAt).format("L hh:mm");
  const lastDate = moment(supplierInfo.lastReplyAt).format("L hh:mm");

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
            {/* PASSAR A ESTILIZACAO PARA O STYLE: Descobrir como estilizar no styled-component */}
            <User width="18" height="18" />
            <DivSpan>{`${supplierInfo.contact.name} - `}</DivSpan>
            <DivSpan color="#028dcd">{supplierInfo.contact.email}</DivSpan>
          </span>
        </DivNameEmail>

        <DivPhoneFax>
          <span>
            <p>
              <Phone width="18" height="18" /> {supplierInfo.contact.phone} -{" "}
              <Fax width="18" height="18" /> {supplierInfo.contact.fax}
            </p>
          </span>
        </DivPhoneFax>
      </DivContainer2>

      <DivContainer3>
        <span>
          <DivWrapper>
            <Eye width="18" height="18" />
            {`Read: ${readDate}`}
          </DivWrapper>
          <span>
            <Backarrow width="18" height="18" /> Last Reply: {lastDate}
          </span>
        </span>
      </DivContainer3>
    </DivSupplier>
  );
}
