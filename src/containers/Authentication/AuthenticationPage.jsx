import React from "react";
import { Col, Row, Tabs } from "antd";

import LoginPage from "./Login";
import RegisterPage from "./Register";

import "./AuthenticationPage.scss";

const { TabPane } = Tabs;

const AuthenticationPage = () => (
  <Row type="flex" justify="center" align="middle" style={{ height: "100vh" }}>
    <Col span={12} align-self="center">
      <Tabs defaultActiveKey="1" animated={false}>
        <TabPane tab="Login" key="1">
          <LoginPage />
        </TabPane>
        <TabPane tab="Register" key="2">
          <RegisterPage />
        </TabPane>
      </Tabs>
    </Col>
  </Row>
);

export default AuthenticationPage;
