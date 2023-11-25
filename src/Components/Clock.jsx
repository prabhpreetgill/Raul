import React, { useState, useEffect } from 'react';


function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1>{getDayOfWeek(currentDate)} - {currentDate.toLocaleDateString()}</h1>
      <h2>{currentDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
