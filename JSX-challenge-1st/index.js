import React from 'react';
import ReactDOM from 'react-dom';

//const space = document.getElementById('root');

ReactDOM.render(
    <>
        <h1>List of My 5 favorite Netflix Series</h1>
        <p>Lost in Space is quite amazing</p>
        <ol>
            <li>Lost in space</li>
            <li>Dark</li>
            <li>Mr. Robot</li>
            <li>Chilling Adventure of Sabrina</li>
            <li>Titans</li>
        </ol>
    </>, document.getElementById('root')
);

// Output:-

// List of My 5 favorite Netflix Series - this is h1 element
// Lost in Space is quite amazing - this is a p element

// 1. Lost in space lost
// 2. Dark
// 3. Mr. Robot
// 4. Chilling Adventure of Sabrina
// 5. Titans
