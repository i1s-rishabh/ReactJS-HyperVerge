import React from 'react';
import Heading from './Heading';
import OrderedList from './OrderedList';
import Paragraph from './Paragraph';

function App() { // in this App.jsx file we've all create components (Heading, Paragraph and OrderedList)
    return <>
        <Heading /> 
        <Paragraph />
        <OrderedList />
    </>;
}

export default App; 

// we can called it as master component
