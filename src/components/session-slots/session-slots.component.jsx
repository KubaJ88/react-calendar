import React, {useEffect} from 'react';


const SessionSlots = ({times}) => {

    // console.log(times)
    
    useEffect(() => {
        return () => console.log('I am unmounting');
    }, []);


    return (
        <ul>
                {times[0].time.map((slots, i) => {
                    return slots.free ? 
                    <li key={i}>{slots.time}</li> : ''
                })}
              
            </ul>
    )

}



export default SessionSlots;