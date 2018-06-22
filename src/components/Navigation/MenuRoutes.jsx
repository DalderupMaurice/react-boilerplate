/* eslint-disable */
import React from "react";

import { Icon, Menu } from "antd";
import { Link } from "react-router-dom";

import "./MenuRoutes.scss";

const { Item, SubMenu } = Menu;

const MenuRoutes = () => (
  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
    {/* ==================
          Home
    ================== */}
    <Item key="nav-home">
      <Icon type="home" />
      <span>Home</span>
      <Link to="/" />
    </Item>

    {/* ==================
        About
    ================== */}
    <Item key="nav-about">
      <Icon type="question-circle-o" />
      <span>About</span>
      <Link to="/about" />
    </Item>

    {/* ==================
        Settings: profile, logout
    ================== */}
    <SubMenu
      key="nav-sub-settings"
      title={
        <span>
          <Icon type="setting" />
          <span>Settings</span>
        </span>
      }
    >
      <Item key="nav-sub-settings-uprofile">
        <span>User Profile</span>
        <Link to="/profile" />
      </Item>
      <Item key="nav-sub-settings-logout">
        <span>Sign Out</span>
        <Link to="/login" />
      </Item>
    </SubMenu>

    {/* ==================
        Rest...
    ================== */}
  </Menu>
);

export default MenuRoutes;
