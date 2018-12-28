import { Layout, Breadcrumb } from "antd";
import React from "react";
import { object } from "prop-types";

const { Content } = Layout;
const { Item } = Breadcrumb;

const MyContent = ({ user: { neoWallet, ethWallet } }) => (
  <Content style={{ margin: "0 16px" }}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Item>My</Item>
      <Item>Breadcrumb</Item>
      <Item>Path</Item>
    </Breadcrumb>
    <div style={{ minHeight: "90vh", padding: 24, background: "#fff" }}>
      <h1>Neo</h1>
      <div style={{ fontSize: "14px", textAlign: "left", margin: "auto" }}>
        <pre>{neoWallet && JSON.stringify(neoWallet, null, 2)}</pre>
      </div>
      <h1>Eth</h1>
      <div style={{ fontSize: "14px", textAlign: "left", margin: "auto" }}>
        <pre>{ethWallet && JSON.stringify(ethWallet, null, 2)}</pre>
      </div>
    </div>
  </Content>
);

MyContent.propTypes = {
  user: object
};

MyContent.defaultProps = {
  user: { neoWallet: {}, ethWallet: {} }
};

export default MyContent;
