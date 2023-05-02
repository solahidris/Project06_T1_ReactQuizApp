import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const questionTitle = () => (
    <div className="titleQuest">
    <p>build a simple React quiz app where</p>
    <p> 1- q1-q5 display with a1-a5</p>
    <p> 1.5- store answer value when clicked</p>
    <p> 2.0- change question after clicked</p>
    <p> 2.5- new sum answer value once question changed</p>
    <p> 3- and at the end, check if no more question, display answer sum</p>
  </div>
  );

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {questionTitle()}
        <p>--------------------------------------------</p>
        <div>
          <p>
            Testing
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;