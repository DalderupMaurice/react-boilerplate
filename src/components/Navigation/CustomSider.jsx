import React, { Component } from "react";
import { Layout } from "antd";

import "./CustomSider.css";
import MenuRoutes from "./MenuRoutes";

const { Sider } = Layout;

class CustomSider extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <MenuRoutes />
      </Sider>
    );
  }
}

// CustomSider.propTypes = {
//
// };

export default CustomSider;
