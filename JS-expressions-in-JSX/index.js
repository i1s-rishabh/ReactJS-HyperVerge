import React from 'react';
import ReactDOM from 'react-dom';

const name = "Rishabh";

ReactDOM.render(
    <>
    <p>This is my {name}</p> 
  // We need a pair of curly braces to access any js variable or expression
    <p>The sum of 2 & 3 is : {2+3}</p> 
  // if we'll write the expression without curly brackets, it'll render as 2 + 3 not 5
    </>,document.getElementById('root')
    );
