import './App.css';
import {Game} from "./Classes/Game";
import {useEffect, useReducer} from "react";
import GameComponent from "./Components/GameComponent/GameComponent";
import WelcomePage from "./Components/WelcomePageComponent/WelcomePage";
import SummaryPage from "./Components/SummaryComponent/SummaryPage";
import {_gameNamesDict, _gameReducerActions, _languages, _state} from "./Utilities/_dictionaries";
import {Player} from "./Classes/Player";
import {parsToGameObject} from "./Utilities/_utilityFunctions";

const gamePhases = {
  welcomePage: 0,
  game: 1,
  summary: 2
}

const gameName = _gameNamesDict.Italy.Gaddiciano;
const newPlayer = new Player();
const language = _languages.english;

const initState = {
  [_state.game]: new Game(gameName, newPlayer, language),
  [_state.phase]: gamePhases.welcomePage
}

function App() {
  const localState = JSON.parse(localStorage.getItem(gameName));
  const [state, setState] = useReducer(gameReducer, setInitState());
  
  function setInitState() {
      const saved = localState ? {game: parsToGameObject(localState), phase: localState.phase} : null;

      if (!saved) {
          localStorage.setItem(gameName, JSON.stringify({game: initState.game.getObject(), phase: initState.phase}));
          return initState;
      }
      return saved;
  }
  
  console.log("state: ", state);
  
  function gameReducer(prevState, action) {
    let newState;
    
    switch (action.type) {
      case _gameReducerActions.setGame:
        newState = {...prevState, [_state.game]: action.game};
        break
      case _gameReducerActions.setPhase:
        newState = {...prevState, [_state.phase]: prevState[_state.phase] + action.modifier};
        break
      case _gameReducerActions.resetGame:
        newState = initState;
        break
    }
    
    localStorage.setItem(newState.game.getName(), JSON.stringify({game: newState.game.getObject(), phase: newState.phase}));
    return newState;
  }
  
  return (
      <div className="page-container scrollable">
        {
          state[_state.phase] === gamePhases.welcomePage &&
          <WelcomePage
              setState={setState}
              currentPhase={state[_state.phase]}
          />
        }
        {
          state[_state.phase] === gamePhases.game &&
          <GameComponent
              game={state[_state.game]}
              setState={setState}
          />
        }
        {
          state[_state.phase] === gamePhases.summary &&
          <SummaryPage
              state={state}
          />
        }
      </div>
  );
}

export default App;
