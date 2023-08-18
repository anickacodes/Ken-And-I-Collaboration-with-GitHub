import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nickiCount, setNickiCount] = useState(0);
  const [kensCount, setKensCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>Color Battle</h1>
        </header>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setNickiCount(nickiCount + 1)}>
          Nicki's count is {nickiCount}
        </button>
        <button onClick={() => setKensCount(kensCount + 1)}>
          Ken's count is {kensCount}
        </button>
      </div>
    </>
  );
}

export default App;