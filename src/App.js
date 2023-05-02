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

  const questionArray = [
    "Siapa hokage ke 7?",
    "Kereta paling best?",
    "Dah subscribe ke belum Youtube Solah?",
  ];
  const answerArray = [
    ["Naruto", "Boruto", "Kakashi"],
    ["Mustang", "Saga", "Myvi"],
    ["Sudah", "Ya sudah", "Dah dah"],
  ];
  const valueArray = [1, 0, 0];
  const totalQuestion = questionArray.length;
  const answerIndex = 0;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const clickHandler = (event) => {
    setQuestionIndex(questionIndex + 1);
    setTotalScore(totalScore + parseInt(event.target.value));
  };

  let content;
  if (questionIndex < questionArray.length) {
    content = (
      <form>
        <p>
          Question [ {questionIndex + 1} / {totalQuestion} ]
        </p>
        <div>
        <p>{questionArray[questionIndex]}</p>
        <input
          type="radio"
          id="radioA"
          value={valueArray[answerIndex]}
          onClick={clickHandler}
          checked={false}
        />
        <label htmlFor="radioA">
          {answerArray[questionIndex][answerIndex]}
        </label>
        </div>
        <div>
        <input
          type="radio"
          id="radioB"
          value={valueArray[answerIndex + 1]}
          onClick={clickHandler}
          checked={false}
        />
        <label htmlFor="radioB">
          {answerArray[questionIndex][answerIndex + 1]}
        </label>
        </div>
        <div>
        <input
          type="radio"
          id="radioC"
          value={valueArray[answerIndex + 2]}
          onClick={clickHandler}
          checked={false}
        />
        <label htmlFor="radioC">
          {answerArray[questionIndex][answerIndex + 2]}
        </label>
        </div>
      </form>
    );
  } else {
    content = (
      <div>
        <p>Masih bossku. This is your score!</p>
        <p>Your Total Score = {totalScore}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {questionTitle()}
        <p>--------------------------------------------</p>
        <div className="inApp">
          {questionIndex < questionArray.length && <div>{content}</div>}
          {questionIndex === questionArray.length && <div>{content}</div>}
        </div>
      </header>
    </div>
  );
}

export default App;
