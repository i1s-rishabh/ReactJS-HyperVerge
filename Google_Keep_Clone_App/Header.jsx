import React from 'react';
import logo from './Images/logo.png';

const Header = () => {
   return (
      <>
         <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <h1> Keep </h1>
         </div>
      </>
   )
}

export default Header;