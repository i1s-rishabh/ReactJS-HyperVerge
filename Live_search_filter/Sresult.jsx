import React from 'react';

const Sresult = (props) => {
    const pic = `https://source.unsplash.com/400x300/?iphone/?${props.name}`;
    return (
        <>
            <div>
                <img src={pic} alt="random_image"/>
            </div>
        </>
    );
}

export default Sresult;