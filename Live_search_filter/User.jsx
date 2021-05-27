import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams();
    const Location = useLocation();
    const History = useHistory();

    // console.log(History);

    return (
        <>
            <h1> user { fname } { lname } page </h1>
            <p> My current location is {Location.pathname}</p>
            {Location.pathname === `/user/rishabh/sharma` ? (
                <button onClick = { () => History.push('/') }> about </button>
            ) : null }
        </>
    );
};

export default User;