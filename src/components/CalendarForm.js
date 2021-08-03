import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/components/calendar.css';

function CalendarForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        dateFormate="EEE MMM D"
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        className="date"
        name="check-in"
        id="check-in"
        placeholder=" "
        required
      />
      <label htmlFor="check-in" className="check__label ">Check-in</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        dateFormate="EEE MMM D"
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="date"
        name="check-in"
        id="check-in"
        placeholder=" "
        required
      />
      <label htmlFor="check-out" className="check__label">Check-out</label>
      <label htmlFor="check-in" className="check__label check__label--desktop">Check-in — Check-out</label>
    </>
  );
  /* const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  function handleDateChange(date) {
    // initial change: start by setting the startDate
    if (!startDate && !endDate) {
      setStartDate(date);
      // startDate has been set, set the end date
    } else if (startDate && !endDate) {
      setEndDate(date);
    }

    // user is choosing another range => set the start date
    // and set the endDate back to null
    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    }
  }

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        minDate={new Date()}
        isClearable
        selectsStart
        dateFormat="yyyy/MM/dd"
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  ); */
}
export default CalendarForm;
