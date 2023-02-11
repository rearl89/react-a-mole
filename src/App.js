import { useState } from 'react';
import MoleContainer from './MoleContainer';

export default function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App" style={{'textAlign': 'center', 'backgroundColor': 'red'}}>
      <h1>React-a-Mole!</h1>
      <div style={{'color': 'white', 'backgroundColor': 'black', 'fontSize': '46px', 'border': '1px solid black', 'borderRadius': '50%'}}>{score}</div>
      {createMoleHill()}
    </div>
  );
}


