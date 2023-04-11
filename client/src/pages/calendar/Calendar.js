import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import HeaderComponent from '../../components/Header';


import "./CalendarStyles.css";



export default function Calendar() {
    return (
        <div>
          <HeaderComponent />
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