/* eslint-disable */
import React from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

import { Icon, Menu } from "antd";
import { Link } from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";

import "./MenuRoutes.scss";

const MenuRoutes = () => (
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
        <Link to="/login" />
      </Menu.Item>
    </Menu.SubMenu>

    {/* ==================
        Rest...
    ================== */}
  </Menu>
);

export default MenuRoutes;
