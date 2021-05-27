import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
   return (
      <>
         <div className="container">
            <h1 className="text-center">
               Welcome
            </h1>
            <br />
            <div class="card" style={{width: "18rem"}}>
               <img src="https://picsum.photos/id/237/300/200" class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://picsum.photos/" target="_blank" class="btn btn-success">Go somewhere</a>
               </div>
            </div>
         </div>
      </>
   );
};
export default App;