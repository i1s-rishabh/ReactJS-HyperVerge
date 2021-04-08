import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString(); //to get current date in local string
const currTime = new Date().toLocaleTimeString(); //to get current time in local string

ReactDOM.render(
    <>
        <h1>Hey, This is Rishabh</h1>
        <p>Current Date is :- {currDate}</p>
        <p>Current Time is :- {currTime}</p>
    </>
    , document.getElementById('root')
);
