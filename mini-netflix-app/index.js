import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";

ReactDOM.render( // custom properties/attributes
  
  <> 
  <h1 className="heading_style">List of top 6 Netflix Series in 2021</h1>
       {Sdata.map((val) => {
        return(
        <Card 
            imgsrc ={val.imgsrc}
            title ={val.title}
            sname ={val.sname}
            link ={val.link}
       />
    )
       })}
   </>  , document.getElementById('root')
);
