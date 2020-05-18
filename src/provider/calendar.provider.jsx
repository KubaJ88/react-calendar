import React, {createContext, useState, useEffect} from 'react';

export const CalendarContext = createContext({


    hidden: true,
    subbmit: false,
    selectedDate: new Date(),
    onDateClick: () => {},
    onClickShowForm: () => {},
    onSubmitChange: () => {},

    
    
});


const CalendarProvider = ({children}) => {
const [hidden, setHidden] = useState(true)
const [submit, setSubmit] = useState(false)
const [selectedDate, setSelectedDate] = useState(new Date());

const onDateClick = day => {
    setSelectedDate(day);
    }

const onClickShowForm = (bool) => {
    setHidden(bool)
};

const onSubmitChange = (bool) => {
    setSubmit(bool)
};

return  (<CalendarContext.Provider
value={{
    hidden,
    submit,
    onDateClick,
    selectedDate,
    onClickShowForm,
    onSubmitChange
}}
>{children}</CalendarContext.Provider>);

};


export default CalendarProvider;