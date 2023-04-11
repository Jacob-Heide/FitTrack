import React from "react";
import logo from "./logo.png";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import { Link, useNavigate} from "react-router-dom";
import { logout } from "../services/api.service";
// import { CalendarOutlined } from "@ant-design/icons";
import "./Header.css";

const { Header } = Layout;

export default function HeaderComponent() {
  const user = JSON.parse(localStorage.getItem("userinfo"));
  const firstName = user.firstName;
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formData = { token: user.token };
  
  const navigate = useNavigate()


  // Handle logout click event
  const handleLogout = async () => {
    try {
      await logout(formData);
  
      // Remove user info from localStorage
      localStorage.removeItem("userinfo");
      console.log("Logged out successfully");
      setTimeout(() => {
        navigate('/')
    }, 1500)
    } catch (error) {
      // Handle error, e.g., show error message, etc.
      console.error('Failed to logout:', error);
    }
  };

  const menu = (
    <Menu className="dropDownMenu">
      <Menu.Item>
         Calendar
      </Menu.Item>
      <Menu.Item>
         Account
      </Menu.Item>
      <Menu.Item onClick={handleLogout} style={{ fontWeight: 'bolder' }}>
         Logout
      </Menu.Item>
    </Menu>
  );


  return (
    <div>
    <Header className="header">
      <div className="logo">
        <Link to="/landing">
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* <Menu theme="light" mode="horizontal">
        <Link to="/calendar">
          <Menu.Item key="calendar">
            <CalendarOutlined className="my-calendar-icon" />
          </Menu.Item>
        </Link>
      </Menu> */}
          <Dropdown  overlay={menu} placement="bottomRight" trigger={['click']}  >
      <Avatar
      alt={firstName}
      className="avatar"
          size={50}
          shape="circle"
        >
          {firstLetter}
        </Avatar>
        </Dropdown>
    </Header>
    </div>
    
  );
}
