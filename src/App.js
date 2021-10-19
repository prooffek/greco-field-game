import './App.css';
import {Game} from "./Classes/Game";
import {useState} from "react";
import GameComponent from "./Components/GameComponent/GameComponent";
import WelcomePage from "./Components/WelcomePageComponent/WelcomePage";
import SummaryPage from "./Components/SummaryComponent/SummaryPage";
import {_gameNamesDict} from "./Utilities/_gameNamesDict";
import {Player} from "./Classes/Player";
import {_languages} from "./Utilities/_languagesDict";

const gamePhases = {
  welcomePage: 0,
  game: 1,
  summary: 2
}

const gameName = _gameNamesDict.Italy.Gaddiciano;
const newPlayer = new Player();
const language = _languages.english;

function App() {
  const [game, setGame] = useState(new Game(gameName, newPlayer, language));
  const [phase, setPhase] = useState(gamePhases.welcomePage);
  
  function phaseHandler(modifier) {
      setPhase(phase + modifier)
  }
  
  return (
      <div className="page-container scrollable">
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
