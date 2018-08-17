import React from "react";
import { Layout } from "antd";
import { object } from "prop-types";

import CustomSider from "./Navigation/CustomSider";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default class AuthenticatedLayout extends React.Component {
  static propTypes = {
    user: object.isRequired
  };

  static defaultProps = {};

  state = {};

  render() {
    const {
      user: { role }
    } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <CustomSider role={role} />
        <Layout>
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
