import React, { useState } from 'react';



const App = () => {
   const state = useState();
// console.log(state);

const [count, setCount] = useState(0);

// here, useState is referring to initial value
// count referring to current data
// setCount function referring to updated data

const IncNum = () => {
   setCount(count + 1);
   // console.log(`clicked ${count++}`);
};

   return (
      <> 
         <h1> {count} </h1>
         <button onClick={IncNum}> Click Me </button>
      </>
   );
};

export default App;