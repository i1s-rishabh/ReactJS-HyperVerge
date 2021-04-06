import React from 'react'; // using react module to get access all react features
import ReactDom from 'react-dom'; // using react-dom module to get access of DOM features 
import './index.css';

const place = document.getElementById('root'); // here we've only div (id= "root") to rendering the elements

ReactDom.render(<h2>Hello, World!</h2>, place); // here we're using render() method to render hello, World! 