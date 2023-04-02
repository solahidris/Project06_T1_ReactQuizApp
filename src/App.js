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

  // - kalau ali dah tua, ali pakai apa?"

  const qnaArray = [
    { question: "Question A", answer: "correctAnswer A1" },
    { question: "Question B", answer: ["correctAnswer B1", "wrongAnswer B2"] },
    { question: "Question C", answer: ["correctAnswer C1", "wrongAnswer C2", "wrongAnswer C3"] },
    { question: "Question D", answer: ["correctAnswer D1", "wrongAnswer D2", "wrongAnswer D3", "wrongAnswer D4"] },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  const questionIndexHandler = () => {
    if (questionIndex < qnaArray.length-1) {setQuestionIndex(questionIndex + 1)}
    else {console.log("sini ganti dengan remove question and answer & display final score")}
  };

  const checkedHandler = () => {};

  const answerList = qnaArray[questionIndex]["answer"];

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {questionTitle()}
        <p>--------------------------------------------</p>
        
        <p>{answerList}</p>

        <div className="qnaBox">
          <p className="questions"> {qnaArray[questionIndex]["question"]} </p>
          <div className="answersContainer">

            {/* Check if ANSWER is an array, if yes, map it. if no, display answer. */}
            {Array.isArray(answerList) ? (
              answerList.map((answer, index) => (
                <label key={index}>
                  <input type="radio" checked={checkedHandler} onChange={questionIndexHandler}/>
                  {answer}
                </label>
              ))
              ) : (
                <label>
                  <input type="radio" checked={checkedHandler} onChange={questionIndexHandler}/>
                  {answerList}
                </label>  
              )}

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;