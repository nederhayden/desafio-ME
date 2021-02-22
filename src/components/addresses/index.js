import React, { useState } from "react";
import Card from "./Card.js";
import { DivAddresses, DivCard } from "../../components/addresses/style";

import { Collapse } from "antd";
// import { CaretRightOutlined } from "@ant-design/icons";

import { ReactComponent as DownArrow } from "../../assets/downarrow.svg";
// import { ReactComponent as UpArrow } from "../../assets/uparrow.svg";

const { Panel } = Collapse;

export default function Addresses({ addressesInfo }) {
  // const [open, setOpen] = useState(false);

  return (
    <DivAddresses>
      {/* <span>
        <button type="button">
          <DownArrow fill="#028dcd" width="18" height="18" />
        </button>
        <h1>Addresses</h1>
      </span> */}

      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <DownArrow
            // rotate={isActive ? 90 : 0}
            fill="#028dcd"
            width="18"
            height="18"
          />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header="Addresses"
          key="1"
          className="site-collapse-custom-panel"
        >
          <DivCard>
            {addressesInfo.map((address) => {
              return (
                <DivCard>
                  <Card
                    title={address.label}
                    name={address.name}
                    code={address.code}
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
