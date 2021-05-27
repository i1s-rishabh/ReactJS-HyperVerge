import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
   return (
      <>
         <Navbar />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
         </Switch>
      </>
   );
};
export default App;