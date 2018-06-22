import React from "react";
import { withRouter } from "react-router-dom";

import { Layout, Breadcrumb } from "antd";

import "./AppContainer.scss";

import CustomSider from "../../components/Navigation/CustomSider";

import Routing from "../../components/Routing/Routing";

const { Content, Footer } = Layout;
const { Item } = Breadcrumb;

const MyContent = () => (
  <Content style={{ margin: "0 16px" }}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Item>My</Item>
      <Item>Breadcrumb</Item>
      <Item>Path</Item>
    </Breadcrumb>
    <div style={{ minHeight: "90vh", padding: 24, background: "#fff" }}>
      <Routing />
    </div>
  </Content>
);

const MyFooter = () => (
  <Footer style={{ textAlign: "center", padding: 0, paddingBottom: 10 }}>
    Bewire ©2018 Created by Trase
  </Footer>
);

const AppContainer = props => (
  <Layout style={{ minHeight: "100vh" }}>
    <CustomSider {...props} />
    <Layout>
      <MyContent />
      <MyFooter />
    </Layout>
  </Layout>
);

AppContainer.propTypes = {};

export default withRouter(AppContainer);
