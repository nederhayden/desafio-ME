import React from "react";
import {
  Card,
  DivSpan,
  DivSpanName,
  DivRow,
  DivPadding,
  DivFont,
} from "../addresses/style";

import { ReactComponent as LocationPin } from "../../assets/locationpin.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Fax } from "../../assets/fax.svg";

export default (props) => (
  <Card>
    <p>{props.title}</p>
    <DivRow>
      <DivSpanName>
        {props.code ? `${props.name} - ` : `${props.name}`}
      </DivSpanName>
      <DivSpan color="rgba(128, 128, 128, 1)">
        <DivFont>{props.code ? `(${props.code})` : ""}</DivFont>
      </DivSpan>
    </DivRow>
    <DivSpan>
      <LocationPin fill="rgba(128, 128, 128, 1)" width="18" height="18" />
      <DivSpan>{props.address}</DivSpan>
    </DivSpan>
    <DivSpan>
      <User fill="rgba(128, 128, 128, 1)" width="18" height="18" />
      <DivSpan>{props.name2}</DivSpan>
    </DivSpan>
    <DivSpan>
      <Email fill="rgba(128, 128, 128, 1)" width="18" height="18" />
      <DivSpan>{props.email}</DivSpan>
    </DivSpan>
    <DivRow>
      <DivSpan>
        <Phone fill="rgba(128, 128, 128, 1)" width="18" height="18" />
        <DivSpan>{props.phone}</DivSpan>
      </DivSpan>
      <DivSpan>
        <DivPadding>
          <Fax fill="rgba(128, 128, 128, 1)" width="18" height="18" />
          <DivSpan>{props.fax}</DivSpan>
        </DivPadding>
      </DivSpan>
    </DivRow>
  </Card>
);
