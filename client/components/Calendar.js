import React, { useState } from "react";
import Calendar from "react-calendar";

function Calendar1() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default Calendar1;
