import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='titleQuest'>build a simple React quiz app where users can click on option buttons to answer questions, next question rendered each time option is selected and at the end, the final score is displayed.</p>
      </header>
    </div>
  );
}

export default App;
