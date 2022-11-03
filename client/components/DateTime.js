import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p> Today : {date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
