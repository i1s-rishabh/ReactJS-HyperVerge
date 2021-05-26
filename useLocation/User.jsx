import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams();
    const Location = useLocation();
    // console.log(Location.pathname);

    return (
        <>
            <h1> user { fname } { lname } page </h1>
            <p> My current location is {Location.pathname}</p>
            {Location.pathname === `/user/rishabh/sharma` ? (
                <button onClick = { () => alert('Hey! You clicked me :)')}> I'm here </button>
            ) : null }
        </>
    );
};

export default User;