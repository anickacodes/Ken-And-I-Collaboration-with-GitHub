import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './game'

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  const getLetterStyle = (index) => {
    return {
      color: colors[index % colors.length],
      display: 'inline-block',
    };
  };

  const [nickiCount, setNickiCount] = useState(0);
  const [kensCount, setKensCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1 className="multi-color-text">
            <span style={getLetterStyle(0)}>C</span>
            <span style={getLetterStyle(1)}>o</span>
            <span style={getLetterStyle(2)}>l</span>
            <span style={getLetterStyle(3)}>o</span>
            <span style={getLetterStyle(4)}>r</span>
            <span className="color-battle"> Battle</span></h1>
        </header>
      </div>
      <h1>Nicki vs Ken</h1>
      <div className="">
        <Game /> 
      </div>
      <div className="card">
        <button className='buttonStyle' onClick={() => setNickiCount(nickiCount + 1)}>
          Nicki's count is {nickiCount}
        </button>
        <button className='buttonStyle' onClick={() => setKensCount(kensCount + 1)}>
          Ken's count is {kensCount}
        </button>
      </div>
    </>
  );
}

export default App;