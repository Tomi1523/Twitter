import "./App.css";
import React, { useState } from "react";
import TwitterFollow from "./Componentes/TwitterFollow";


function App() {


 


  const fernando = { userName: 'fernando1', children: "fer16" };
  const levi = { userName: 'deviantart/spyed', children: "levi" };

  return (


    <div className="App">
      
      <TwitterFollow
        isFollowing
        userName="sony"
        children="sony" />

      <TwitterFollow
        {...fernando} />


      <TwitterFollow
        {...levi} />
        
      <TwitterFollow
        userName="tomidopazo"
        children="tomidopazo" />
      
        

    </div>

  );
}

export default App;
