import React, {useState} from 'react';

const App = () => {
   const [bg, setBg] = useState('black');
   const [name, setName] = useState('Click Me!');

   const bgChange = () => {
      let newBg = 'chartreuse';
      setBg(newBg);
      setName('Double Click Me! 🙌')
   }

   const sChange = () => {
      setBg('black');
      setName("I'm back 👨‍🎤");
   }

   return(
      <>
         <div style = {{ backgroundColor: bg}}>
            <button onClick = {bgChange} onDoubleClick = {sChange}> {name} </button>
         </div>
      </>
   )
}

export default App;