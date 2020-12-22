import React from "react"
import ReactImage from "./img/logo.svg"
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>My React App!</h1>
       <h2>Author: Walley</h2>
       <img src={ReactImage} alt="my-profile-image"/>
    </div>
  );
}

export default App;
