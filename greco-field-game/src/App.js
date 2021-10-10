import logo from './logo.svg';
import './App.css';
import {Game} from "./Classes/Game";
import {useState} from "react";
import GameComponent from "./Components/GameComponent";
import WelcomePage from "./Components/WelcomePage";

const gamePhases = {
  welcomePage: 0,
  game: 1,
  summary: 2
}

function App() {
  const [game, setGame] = useState(new Game());
  const [phase, setPhase] = useState(gamePhases.welcomePage);
  
  // console.log("game: ", game);
  // console.log("phase: ", phase);
  
  function phaseHandler(modifier) {
      console.log("re-rendering");
      setPhase(phase + modifier)
  }

  // console.log("render: ", phase === gamePhases.welcomePage);
  // console.log("render: ", phase === gamePhases.game);
  
  return (
      <div className="page-container">
        {
          phase === gamePhases.welcomePage &&
          <WelcomePage
              setNextPage={setPhase}
              currentPage={phase}
          />
        }
        {
          phase === gamePhases.game &&
          <GameComponent
              game={game}
              currentPhase={phase}
              setPhase={phaseHandler}
              // addAnswer={setPlayer}
              // answers={player.answers}
          />
        }
      </div>
  );
}

export default App;
