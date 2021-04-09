import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const currDate = new Date().getHours();
let greeting;
const cssStyle = {
    color : 'green'
};

if(currDate >= 1 && currDate <= 11) {
greeting = "Good Morning";
cssStyle.color = "green";
}else if(currDate >= 12 && currDate <= 16) {
greeting = "Good Afternoon";
cssStyle.color = "orange";
}else if(currDate >= 17 && currDate <= 19) {
greeting = "Good Evening"; 
cssStyle.color = "red";
}else {
greeting = "Good Night";
cssStyle.color = "gray";
}

ReactDOM.render(
    <>
        <div>
            <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
        </div>
    </>
    , document.getElementById('root')
);