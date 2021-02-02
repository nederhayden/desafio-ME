import React from "react";
import { DivSupplier, Div1, DivRow, DivCode } from '../../components/supplier/style'

export default function Supplier({ supplierInfo }) {
  return (
    <DivSupplier>
      <Div1>
        <h3>Supplier</h3>
        <DivRow>
          <p>{supplierInfo.name}</p>
          <DivCode>
            <p>Code #{supplierInfo.code}</p>
          </DivCode>
        </DivRow>
        <p>{supplierInfo.document.value}</p>
        <p>{supplierInfo.address}</p>
      </Div1>

      <div id="Column2">
        {supplierInfo.contact.name}
        {supplierInfo.contact.email}
        {supplierInfo.contact.phone}
        {supplierInfo.contact.fax}
      </div>

      <div id="Column3">
        <p>Read: {supplierInfo.readAt}</p>
        <p>Last Reply: {supplierInfo.lastReplyAt}</p>
      </div>
    </DivSupplier>
  );
}
