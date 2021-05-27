import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Search from './Search';
import Error from './Error';
import Menu from './Menu';
import User from './User';

const App = () => {
   const Name = () => {
      return <h1> This is User name </h1>
   };

   return (
      <>
         <Menu />
         <Switch>
            <Route exact path='/' component={() => <About name="About" />} />
            <Route exact path='/service' render={() => <Service name="Service" />} />
            <Route exact path='/search' component={Search} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact/name" component={Name} />
            <Route path="/user/:fname/:lname" component={User} />
            <Route component={Error} />
         </Switch>
      </>
   );
};

export default App;