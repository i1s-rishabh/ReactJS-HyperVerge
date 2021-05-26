import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import Menu from './Menu';

const App = () => {

   const Phone = () => {
      return <h1> This is Phone Number </h1>
   };

   return (
      <>
         <Menu />
         <Switch>
            <Route exact path="/" component={() => <About name="About" />} />
            <Route exact path="/service" render={() => <Service name="Service" />} />
            <Route exact path="/contact" component={() => <Contact name="Contact" />} />
            <Route path="/contact/phone" component={Phone} />
            <Route component={Error} />
         </Switch>
      </>
   );
};

export default App;