"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from "@/lib/data"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
import { ne } from '@faker-js/faker'

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      defaultView={Views.WORK_WEEK}
      defaultDate={new Date(2025, 4, 27)} // Important !
      onView={handleOnChangeView}
      style={{ height: "80vh" }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date (2025, 1, 0, 17, 0, 0)}
    />

  );
};

export default BigCalendar;
