import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Link } from "react-router-dom";
import { CalendarOutlined } from '@ant-design/icons';


import "./CalendarStyles.css";
import logo from './logo.png';
import { Layout, Menu } from 'antd';

const { Header } = Layout;


export default function Calendar() {
    return (
        <div>
        <Header className="header">
       <div className="logo">
       <Link to="/landing">
        <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['calendar']}>
        <Menu.Item key="calendar">
        <CalendarOutlined className="my-calendar-icon"  />
        </Menu.Item>
      </Menu>
    </Header>
    
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'Workout 1', start: '2023-04-01' },
          { title: 'Workout 2', start: '2023-04-05', end: '2023-04-07' }
        ]}
        />
        </div>
    );
  }