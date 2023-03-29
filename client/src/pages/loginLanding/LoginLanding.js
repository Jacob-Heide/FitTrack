import React from "react";
import "./LandingStyles.css";
import { Layout, Menu } from 'antd';

const { Header } = Layout;


export default function LandingPageHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Header>
  );
}