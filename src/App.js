import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [answerClicked, setAnswerClicked] = useState('');

  const answerClickedHandler = (event) => {
    setAnswerClicked(event.target.value);
  };
  useEffect(() => {
    console.log(answerClicked);
  }, [answerClicked]);

  // useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="titleQuest">
          <p>build a simple React quiz app where</p>
          <p> 1- users can click on option buttons to answer questions</p>
          <p> 1.5- store answer value</p>
          <p> 2- next question rendered each time option is selected</p>
          <p> 3- and at the end, the final score is displayed.</p>
        </div>
        <p>--------------------------------------------</p>
        <div className="qnaBox">
          <p className="questions"> kalau ali dah tua, ali pakai apa? </p>
          <div className="answersContainer">
            <label className="answers">
              <input type="radio" name="inputA" value="A" checked={answerClicked === "A"} onChange={answerClickedHandler}></input> A) Tongkat Ali
            </label>
            <label className="answers">
              <input type="radio"></input> B) BMW
            </label>
            <p>answerclicked punya value: {answerClicked}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
