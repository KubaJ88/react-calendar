import React, { useState, useContext, useEffect } from "react";
import './choose-date.styles.scss';
import {CalendarContext} from '../../provider/calendar.provider';
import {format } from "date-fns";
import SessionsContext from '../../context/sessions/sessions.context';
import Popup from '../popup/popup.component';
import ThankYou from '../thankyou/thankyou.component';
// import SessionSlots from '../session-slots/session-slots.component';



const ChooseDate = () => { 

    const {selectedDate, hidden, onClickShowForm} = useContext(CalendarContext);
    // const {selectedDate} = useContext(CalendarContext);
    // console.log(selectedDate)
    const dateFormat = "dd/MM/yyyy";
    const doctorSession = useContext(SessionsContext);
    const dataFormated = format(selectedDate, dateFormat)
    const dateinText = format(selectedDate, "dd MMM yyyy")
    

    let times = doctorSession.filter(value => {
        return value.date == dataFormated
    });

    const [selectedSlot, setSelectedSlot] =  useState(-1);

   
    const clickHandler = (i) => {
        setSelectedSlot(i)
        onClickShowForm(false)
        // console.log(hidden)
    }




    return (
        
        
        <div className="choose-date">
            {/* <ThankYou className='choose-date'/> */}
            <h1>{dateinText}</h1>
            {typeof times[0] =="undefined" ? <div className='choose-date__nothing'>Nothing is free today</div>
            :  
            // <SessionSlots times={times}/>
            <ul className="sessions" >
                {times[0].time.map((slots, i) => {
                    return slots.free ? 
                    <li className={`sessions__hour ${selectedSlot === i ? 'active' : ""}`}  key={i} onClick={() => clickHandler(i)}>{slots.time} </li> : ''
                })}
              
            </ul>
            }
            {!hidden ? <Popup/> : null}
            
        </div>

        // : <Popup/>
    )
}


export default ChooseDate;
