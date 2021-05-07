import React, {useState} from 'react';

const App = () => {

   const [name, setName] = useState("");

   const [lastName, setLastName] = useState("");

   const [fullName, setFullName] = useState("");

   const [lastNamenew, setLastNameNew] = useState("");

   const onSubmits = (event) => {
      event.preventDefault();
      setFullName(name);
      setLastNameNew(lastName);
   }

   const InputEvent = (event) => {
      setName(event.target.value);
   }

   const InputEventTwo = (event) => {
      setLastName(event.target.value)
   } 

   return(
      <>
         <div className="main_div"> 
            <form onSubmit={onSubmits}>
               <div className="container">
                  <h1> Hello {fullName} {lastNamenew} </h1>
                  <input type = "text" placeholder = "Enter Your Name" onChange = {InputEvent} value = {name} />
                  <br/>
                  <input type = "text" placeholder = "Enter Your Last Name" onChange = {InputEventTwo} value = {lastName} />
                  <button type="submit"> SUBMIT </button>
               </div>
            </form>
         </div>
      </>
   );
}

export default App;