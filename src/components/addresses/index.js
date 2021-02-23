import React from "react";
import Card from "./Card.js";
import {
  DivAddresses,
  DivCard,
  SpanAddresses,
} from "../../components/addresses/style";

import { Collapse } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

// import { ReactComponent as DownArrow } from "../../assets/downarrow.svg";
// import { ReactComponent as UpArrow } from "../../assets/uparrow.svg";

const { Panel } = Collapse;

export default function Addresses({ addressesInfo }) {
  function PanelHeaderCustom(header) {
    return (
      <span>
        <SpanAddresses>{header}</SpanAddresses>
      </span>
    );
  }

  return (
    <DivAddresses>
      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <RightCircleOutlined
            rotate={isActive ? 90 : 0}
            style={{ color: "#028dcd", fontSize: "30px" }}
          />
        )}
      >
        <Panel header={PanelHeaderCustom("Addresses")} key="1">
          <DivCard>
            {addressesInfo.map((address) => {
              return (
                <DivCard>
                  <Card
                    title={address.label}
                    name={address.name}
                    code={address.code ? address.code : ''}
                    address={address.address}
                    name2={address.contact.name}
                    email={address.contact.email}
                    phone={address.contact.phone}
                    fax={address.contact.fax}
                  />
                </DivCard>
              );
            })}
          </DivCard>
        </Panel>
      </Collapse>
    </DivAddresses>
  );
}
