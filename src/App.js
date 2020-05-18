import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './components/reset/reset.styles.scss';
// import Calendar from './components/calendar/calendar.component';
import ChooseDate from './components/choose-date/choose-date.component';
import CalendarGrid from './components/calendar/calendar.component';
import ThankYou from './components/thankyou/thankyou.component';

function App() {
  return (
    <div className="container">
      {/* <Calendar/> */}
      <CalendarGrid/>
      <ChooseDate/>
      <ThankYou/>
    </div>
  );
}

export default App;
