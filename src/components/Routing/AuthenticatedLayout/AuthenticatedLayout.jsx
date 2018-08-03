import { Layout } from "antd";
import React from "react";

import CustomSider from "./Navigation/CustomSider";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default class AuthenticatedLayout extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <CustomSider {...this.props} />
        <Layout>
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
