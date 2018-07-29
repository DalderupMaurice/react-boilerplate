import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;
const { Item } = Breadcrumb;

const MyContent = () => (
  <Content style={{ margin: "0 16px" }}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Item>My</Item>
      <Item>Breadcrumb</Item>
      <Item>Path</Item>
    </Breadcrumb>
    <div style={{ minHeight: "90vh", padding: 24, background: "#fff" }}>
      <h1>??</h1>
    </div>
  </Content>
);

export default MyContent;
