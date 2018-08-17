import React from "react";
import { Layout } from "antd";
import { string } from "prop-types";

import MenuRoutes from "./MenuRoutes";

import "./CustomSider.scss";

const { Sider } = Layout;

class CustomSider extends React.Component {
  static propTypes = {
    role: string.isRequired
  };

  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { role } = this.props;
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <MenuRoutes role={role} />
      </Sider>
    );
  }
}

export default CustomSider;
