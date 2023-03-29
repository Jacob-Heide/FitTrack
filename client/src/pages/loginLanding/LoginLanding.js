import React from "react";
import "./LandingStyles.css";
import logo from './logo.png';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { CalendarOutlined } from '@ant-design/icons';


const { Header } = Layout;


export default function LandingPageHeader() {
  return (
    
    <div className="landing-container">
            <Header className="header">
       <div className="logo">
       <Link to="/landing">
        <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['calendar']}>
        <Link to="/calendar">
        <Menu.Item key="calendar">
        <CalendarOutlined className="my-calendar-icon" />
        </Menu.Item>
        </Link>
      </Menu>
    </Header>
    </div>
  );
}