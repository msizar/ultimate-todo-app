import React from 'react';

import './style.css';


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const TodayDate = () => {
    const fullDate = new Date();
    const dateArr = fullDate.toDateString().split(" ");
    const date = `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`;
    const day = weekDays[fullDate.getUTCDay()];
    const time = fullDate.toLocaleTimeString();

    return (
        <div className="todayDate-root">
            <div>{day}</div>
            <div>{time}</div>
            <div>{date}</div>
        </div>
    );
}

export default TodayDate;