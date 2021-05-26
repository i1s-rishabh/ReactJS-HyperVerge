import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error'

const App = () => {

   const Phone = () => {
      return <h1> This is Phone Number </h1>
   };

   return (
      <>
         <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/contact/phone" component={Phone} />
            <Route component={Error} />
         </Switch>
      </>
   );
};

export default App;