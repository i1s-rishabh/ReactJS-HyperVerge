import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/"> AboutUs </NavLink>
            <NavLink activeClassName="active_class" to="/contact"> ContactUs </NavLink>
            <br />
            <a href="/"> AboutUS </a>
            <a href="/contact"> Contact </a>
        </>
    );
};

export default Menu;