import React from 'react';
import catJPG from './assets/cat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={catJPG} alt="logo" />
          <p>Смотрю на тебя, как на говно!</p>
        </div>
      
      </header>
    </div>
  );
}

export default App;
