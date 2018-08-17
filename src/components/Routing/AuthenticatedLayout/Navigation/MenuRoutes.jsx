import React from "react";

import { Icon, Menu } from "antd";
import { Link } from "react-router-dom";
import { string } from "prop-types";

import { ROLES } from "../../../../__utils__/Constants";

import "./MenuRoutes.scss";

const MenuRoutes = ({ role }) => (
  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
    {/* ==================
          Home
    ================== */}
    <Menu.Item key="nav-home">
      <Icon type="home" />
      <span>Home</span>
      <Link to="/" />
    </Menu.Item>

    {/* ==================
        About
    ================== */}
    <Menu.Item key="nav-about">
      <Icon type="question-circle-o" />
      <span>About</span>
      <Link to="/about" />
    </Menu.Item>

    {/* ==================
        Settings: profile, logout
    ================== */}
    <Menu.SubMenu
      key="nav-sub-settings"
      title={
        <span>
          <Icon type="setting" />
          <span>Settings</span>
        </span>
      }
    >
      <Menu.Item key="nav-sub-settings-uprofile">
        <span>User Profile</span>
        <Link to="/profile" />
      </Menu.Item>
      <Menu.Item key="nav-sub-settings-logout">
        <span>Sign Out</span>
        <Link to="/logout" />
      </Menu.Item>
    </Menu.SubMenu>

    {/* ==================
          ADMIN
    ================== */}
    {role === ROLES.admin && (
      <Menu.Item key="nav-admin">
        <Icon type="question-circle-o" />
        <span>Admin panel</span>
        <Link to="/admin" />
      </Menu.Item>
    )}
  </Menu>
);

MenuRoutes.propTypes = {
  role: string.isRequired
};

export default MenuRoutes;
