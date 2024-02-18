import React from 'react';
import Day from './Day';

const Month = (props) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const firstDay = new Date(2021, props.month - 1, 1).getDay();
  const startingDay = weekdays[firstDay];

  return (
    <div>
      <h2>{props.monthName}</h2>
      <Day startingDay={startingDay} />
    </div>
  );
};

export default Month;