import './App.css';
import {Game} from "./Classes/Game";
import {useReducer, useState} from "react";
import GameComponent from "./Components/GameComponent/GameComponent";
import WelcomePage from "./Components/WelcomePageComponent/WelcomePage";
import SummaryPage from "./Components/SummaryComponent/SummaryPage";
import {_gameNamesDict, _gameReducerActions, _languages, _state} from "./Utilities/_dictionaries";
import {Player} from "./Classes/Player";
import {parsToGameObject} from "./Utilities/_utilityFunctions";
import "./NavButtons.css"
import languages from "./_jsonFiles/LanguageDictionaries/_dictionary.json"

const gamePhases = {
  welcomePage: 0,
  game: 1,
  summary: 2
}

const gameName = _gameNamesDict.Italy.Gaddiciano;
const newPlayer = new Player();

const initState = {
  [_state.game]: new Game(gameName, newPlayer, _languages.polish),
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
  
  function resetGame(language) {
      return {
          game: new Game(gameName, new Player(), language),
          phase: 0
      }
  }
  
  function gameReducer(prevState, action) {
    let newState;
    
    switch (action.type) {
      case _gameReducerActions.setGame:
        newState = {...prevState, [_state.game]: action.game};
        break;
      case _gameReducerActions.setPhase:
        newState = {...prevState, [_state.phase]: prevState[_state.phase] + action.modifier};
        break;
      case _gameReducerActions.setLanguage:
        let game = prevState[_state.game];
        game.setLanguage(action.language)
        newState = {...prevState, [_state.game]: game};
        break;
      case _gameReducerActions.resetGame:
        newState = resetGame(prevState[_state.game].getLanguage());
        break;
    }
    
    localStorage.setItem(newState.game.getName(), JSON.stringify({game: newState[_state.game].getObject(), phase: newState.phase}));
    return newState;
  }
  
  return (
      <div className="page-container scrollable">
        {
          state[_state.phase] === gamePhases.welcomePage &&
          <WelcomePage
              setState={setState}
              currentPhase={state[_state.phase]}
              language={languages[state.game.getLanguage()]}
          />
        }
        {
          state[_state.phase] === gamePhases.game &&
          <GameComponent
              game={state[_state.game]}
              setState={setState}
              language={languages[state.game.getLanguage()]}
          />
        }
        {
          state[_state.phase] === gamePhases.summary &&
          <SummaryPage
              state={state}
              setState={setState}
              language={languages[state.game.getLanguage()]}
          />
        }
      </div>
  );
}

export default App;
