import { Layout, Breadcrumb } from "antd";
import React from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

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
