import React, { Component } from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { Layout } from "antd";

import MenuRoutes from "./MenuRoutes";

import "./CustomSider.scss";

const { Sider } = Layout;

class CustomSider extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
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
