import React from 'react';



function App() {
    const currDate = new Date().getHours();
    let greeting;
    let cssStyle = {
    color : 'green'
};

if(currDate >= 1 && currDate <= 11) {
    greeting = "Good Morning";
    cssStyle.color = "green";
    }else if(currDate >= 12 && currDate <= 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
    }else if(currDate >= 17 && currDate <= 20) {
    greeting = "Good Evening"; 
    cssStyle.color = "red";
    }else {
    greeting = "Good Night";
    cssStyle.color = "gray";
}

    return(
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}

export default App;