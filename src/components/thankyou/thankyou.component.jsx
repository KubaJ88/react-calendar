import React, {useContext} from 'react';
import './thankyou.styles.scss';
import {CalendarContext} from '../../provider/calendar.provider';

const ThankYou = () => {

    const {submit, onSubmitChange} = useContext(CalendarContext);

    return (
        
        <div className={`background ${submit ? 'background--active' : 'background--disabled' }`}>
        <div className={`background__msg`}>
            
        </div>
        
       <a href="#" className="background__close" onClick={() => 
    onSubmitChange(!submit)}>&times;</a>
       <h1 className='background__text'>Thank you.<br></br>You'll recieve confirmation mail soon.</h1>
       </div>
       

    )
}


export default ThankYou;