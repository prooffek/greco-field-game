import './App.css';
import {Game} from "./Classes/Game";
import {useState} from "react";
import GameComponent from "./Components/GameComponent/GameComponent";
import WelcomePage from "./Components/WelcomePageComponent/WelcomePage";
import SummaryPage from "./Components/SummaryComponent/SummaryPage";

const gamePhases = {
  welcomePage: 0,
  game: 1,
  summary: 2
}

function App() {
  const [game, setGame] = useState(new Game());
  const [phase, setPhase] = useState(gamePhases.welcomePage);
  
  function phaseHandler(modifier) {
      setPhase(phase + modifier)
  }
  
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
        {
          phase === gamePhases.summary &&
          <SummaryPage
              game={game}
              phase={phase}
              setPhase={setPhase}
          />
        }
      </div>
  );
}

export default App;
