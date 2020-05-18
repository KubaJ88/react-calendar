import React, { useState, useContext } from "react";
import {format, startOfWeek, addDays, startOfMonth
,endOfMonth,
endOfWeek,
isSameMonth,
parse,
isSameDay,
addMonths,
subMonths,
toDate
} 
from "date-fns";
import './calendar.styles.scss';
import SessionsContext from '../../context/sessions/sessions.context';
import {CalendarContext} from '../../provider/calendar.provider';

const CalendarGrid = () => {
const [currentDate, setCurrentDate] = useState(new Date());
const [today, setToday] = useState(new Date());
// const [selectedDate, setSelectedDate] = useState(new Date());
const doctorSession = useContext(SessionsContext);
const {selectedDate, onDateClick} = useContext(CalendarContext)



// const [doctorSession, setDoctorSession] = useState(DR_DATA)
let sessionDate = doctorSession.map((session) => {
    session.parsedDate = parse(session.date, 'dd/MM/yyyy', new Date())
   //  session.freeTime = session.time.reduce((prev,cur) => {
   //      console.log(prev.free, cur.free)
   //      return prev + cur.free
   //  },false)
    return session

}
);


// console.log(sessionDate)

const header = () => {
const dateFormat = "MMMM yyyy";
// console.log(parse(doctorSession, 'dd/MM/yyyy', new Date()))
// console.log(isSameDay(sessionDate[0].parsedDate,selectedDate))

return (
   
   <div className="header">
      <div className="header__icon">
         <div className="icon" onClick={prevMonth}>
            chevron_left
         </div>
      </div>
      <div className="header__text">
         <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div className="header__icon">
         <div className="icon" onClick={nextMonth}>
            chevron_right
         </div>
      </div>
   </div>
   );
};

const days = () => {
const dateFormat = "EEE";
const days = [];
let startDate = startOfWeek(currentDate);
for (let i = 0; i < 7; i++) {
      days.push(
         <div className="days_format" key={i}>
         {format(addDays(startDate, i), dateFormat)}
         </div>
      );
   }
   return <div className="days">{days}</div>;
};
const cells = () => {
const monthStart = startOfMonth(currentDate);
const monthEnd = endOfMonth(monthStart);
const startDate = startOfWeek(monthStart);
const endDate = endOfWeek(monthEnd);
const dateFormat = "d";
const rows = [];
let days = [];
let day = startDate;
let formattedDate = "";
// console.log(day)
while (day <= endDate) {
   for (let i = 0; i < 7; i++) {
   formattedDate = format(day, dateFormat);
   const cloneDay = day;
   // console.log(day)
   // console.log(isSameMonth(day, monthStart) && isSameMonth(day, monthStart) )
days.push(

   
    
      <div 
       className={`column cell ${!isSameMonth(day, monthStart)
       ? "disabled" : isSameDay(day, selectedDate) 
       ? "selected" : ''}`} 
    
       key={day} 
       onClick={() => onDateClick((cloneDay))}
       > 
       <span className="number">{formattedDate}</span>
       <span className={isSameDay(day, today)? 'today' : ''}></span>
       <div className='session__containter'>
       {sessionDate.map((session) => {
         //  console.log(session)
         
         return session.time.map((dr, i) => {  
           
            return  isSameDay(day, session.parsedDate) && dr.free == true ?  <span className='drsession' key={i}></span> : 
            isSameDay(day, session.parsedDate) && dr.free == false ? <span className='drsession--booked' key={i}></span> : ''
         })
      //   return  isSameDay(day, session.parsedDate) && session.time.free != 0 ?  <span className='drsession'></span> : ''
    })}
    {sessionDate.map((session) => {
        return  isSameDay(day, session.parsedDate) && session.freeTime == 0 ?  <span className='drsession-full'></span> : ''
    })}
    </div>
       {/* <span className="bg">{formattedDate}</span> */}
     </div>
     );
   day = addDays(day, 1);
  }
rows.push(
      <div className="row" key={day}> {days} </div>
    );
   days = [];
 }
 return <div className="body">{rows}</div>;
}
const nextMonth = () => {
   setCurrentDate(addMonths(currentDate, 1));
};
const prevMonth = () => {
   setCurrentDate(subMonths(currentDate, 1));
};
// const onDateClick = day => {
// setSelectedDate(day);
// }
return (
   <div className="calendar">
      {header()}
      {days()}
      {cells()}
   </div>
  );
};
export default CalendarGrid;