import React from 'react';
import CountdownTimer from './CountdownTimer';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [targetDate, setTargetDate] = useState(new Date(dateTimeAfterThreeDays));

  const handleChange = (event) => {
    
    event.preventDefault();
    if (event.target.value) {
      setTargetDate(new Date(event.target.value));
    } else {
      setTargetDate(new Date(dateTimeAfterThreeDays));
    }
    
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <form>
        <label htmlFor='countdown-date-time'>Select a Date and Time: </label>
        <input
          id="countdown-date-time"
          name="countdown-date-time"
          type="datetime-local"
          onChange={handleChange}
          />
      </form>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
