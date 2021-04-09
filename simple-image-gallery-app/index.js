import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/200/300?grayscale";
const img4 = "https://picsum.photos/200/300";

ReactDOM.render(
    <>
        <h1 className = "heading">Simple Image Gallery</h1>
        <div className = "gallery">
            <img src = {img3} />
            <img src = {img2} />
            <img src = {img1} />
            <img src = {img4} />
        </div>
    </>
    ,document.getElementById('root')
);