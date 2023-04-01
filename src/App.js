import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const questionTitle = () => (
    <div className="titleQuest">
    <p>build a simple React quiz app where</p>
    <p> 1- users can click on option buttons to answer questions</p>
    <p> 1.5- store answer value</p>
    <p> 2- next question rendered each time option is selected</p>
    <p> 3- and at the end, the final score is displayed.</p>
  </div>
  );

  const qnaArray = [
    { question: "Question A - kalau ali dah tua, ali pakai apa?", answer: "Answer A" },
    { question: "Question B", answer: "Answer B" },
    { question: "Question C", answer: "Answer C" },
    { question: "Question D", answer: "Answer D" },
    { question: 'final score displayed here', answer: "total points from qna and remove button on the left here"}
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  const questionIndexHandler = () => {
    if (questionIndex+1 < qnaArray.length) {setQuestionIndex(questionIndex + 1)}
    else {console.log("sini ganti dengan remove question and answer & display final score")}
  };

  const checkedHandler = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {questionTitle()}
        <p>--------------------------------------------</p>
        <div className="qnaBox">
          <p className="questions"> {qnaArray[questionIndex]["question"]} </p>
          <div className="answersContainer">
            <label>
              <input type="radio" checked={checkedHandler} onChange={questionIndexHandler}></input>
              {qnaArray[questionIndex]["answer"]}
            </label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;