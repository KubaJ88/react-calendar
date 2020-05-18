import React, { useState, useContext, useEffect } from "react";
import './popup.styles.scss';
import {CalendarContext} from '../../provider/calendar.provider';
import gsap from "gsap";
import { TimelineLite } from "gsap/gsap-core";





const Popup = () => {


    const {hidden, onClickShowForm, onSubmitChange} = useContext(CalendarContext);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    
    const submitHandler = (event) => {
        event.preventDefault();
        // setSelectedSlot(-1)
        console.log(username, email, msg)
        onClickShowForm(true)
        onSubmitChange(true)
        setUsername('')
        setEmail('')
        setMsg('')
        
        // console.log(hidden)
    }

    // let t1 =gsap.timeline()

    

    // const removeForm = element => {
    //     gsap.to(element, {
    //     duration: 1,
    //     x: '20px',
    //     opacity: 0,
    //       // backgroundColor: 'blue',
    //       ease: "power2.out",
    //     onComplete: () => {onClickShowForm(true)}
    //       // repeat: 2,
    //     //   stagger: {
    //     //     amount: 4
    //     //   }
    //     });
    //   };

    //   const closeForm =  () => {
    //       t1.call(removeForm('.popup'))
    //     //   .isActive()
          
       
    //   }


    return (
        // !hidden ? 
        <div className='popup'>
            <div className="form">
            <form className='book_session' onSubmit={(event) => submitHandler(event)}>
            <div className='form__group'>
            <input type="text" className="form__input" placeholder="Full name" id="name" required/>
            <label htmlFor="name" className="form__label">Full name</label>
            </div>
            <div className='form__group'>
            <input type="email" className="form__input" placeholder="Email" id="email" required onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor="email" className="form__label">Email</label>
            </div>
            <div className='form__group'>
            
            <textarea id="msg" className='form__input form__input--textarea' placeholder="Describe your problem" id="msg" rows="5" cols="30"></textarea>
            <label htmlFor="msg" className="form__label" >Describe your problem</label>
            </div>
            {/* <label>
          Pick your favorite flavor:
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label> */}
            
            <button type='submit' className='form__btn'>Book</button>
            </form>
            
           

            
                                    
            </div>
                                 
            {/* <button onClick={() => onClickShowForm(true)}>Click Me</button> */}
            <a href="#" className="popup__close" onClick={() => onClickShowForm(true)}>&times;</a>
        </div>
        // : <div>Kuba</div>
    )
}


export default Popup;