import React from 'react'; // using react module to get access all react features
import ReactDom from 'react-dom'; // using react-dom module to get access of DOM features 


const place = document.getElementById('root'); // here we've only div (id= "root") to rendering the elements

ReactDom.render(
    [ // in react v16 or above we can render the array elements so we can use the brackets to wrap the multiple elements into an enclosing tag beacuse for render method in react Adjacent JSX elements must be wrapped in an enclosing tag
    <h2>Hello, World!</h2>, 
    <p>This is a paragraph</p>
    ]
    , place
    ); 

// Output:- 
// Hello, World!
// This is a paragraph
