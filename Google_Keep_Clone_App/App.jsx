import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
   const [addItem, setAddItem] = useState([]);


   const addNote = () => {
      // alert("I'm Clicked");
         t
   };

   return (
      <>
         <Header />
         <CreateNote 
            passNote={addNote}
         />
         <Note />
         <Footer />
      </>
   )
}

export default App;