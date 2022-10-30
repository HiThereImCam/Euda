// import * as React from 'react';
// import CalendarMUI from './CalendarMUI'
// import useOnClickOutside from "../Hooks/useOnClickOutside"

// const CalendarModal = ({setCalendarClick, modalRef}) => {
//     useOnClickOutside(modalRef, () => setCalendarClick(false))
//     return(
//         // <div ref = {modalRef} style={{border: '1px solid red'}}>
//         <div id="calendar-container"ref = {modalRef} >
//             <CalendarMUI/>
//         </div>
//     )
// }

// export default CalendarModal
import { useState } from 'react';
import Calendar from 'react-calendar';
import "../../node_modules/react-calendar/dist/Calendar.css"
// import './App.css';

function CalendarModal() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendar-selected-date-container'>
      {/* <h1 className='text-center'>React Calendar</h1> */}
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default CalendarModal;