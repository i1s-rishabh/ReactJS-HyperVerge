import React, { useState, useEffect } from 'react';

const App = () => {
   const [num, setNum] = useState(0);
   const [nums, setNums] = useState(1);

   useEffect(() => {
      alert("I'm Clicked!");
      console.log('I am clicked');
   }, [num]);

    return (
      <>
         <button onClick={() => {
            setNum(num+1)}
            }>
            Click me {num}
         </button>
         <br />
         <button onClick={() => {
            setNums(nums+1)}
            }>
            Click me {nums}
         </button>
      </>
    );
}

export default App;
