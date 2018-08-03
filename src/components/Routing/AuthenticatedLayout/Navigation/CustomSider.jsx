import { Layout } from "antd";
import React, {
  Component
} from "react";

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
