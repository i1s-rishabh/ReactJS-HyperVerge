import React, { useState, useEffect } from 'react';

const App = () => {
   const [num, setNum] = useState(0);

   useEffect(() => {
      document.title= `Clicked ${num} times`
   }, [num]);

    return (
      <>
         <button onClick={() => {
            setNum(num+1)}
            }>
            Click me {num}
         </button>
      </>
    );
}

export default App;
