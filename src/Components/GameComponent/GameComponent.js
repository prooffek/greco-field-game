import {useEffect, useReducer} from "react";
import {_modifiers} from "../../Utilities/_valueModifiers";
import MapComponent from "./../MapComponent/MapComponent";
import {_reducerDict} from "../../Utilities/_reducerDict";
import QuestionPage from "./../QuestionPageComponent/QuestionPage";

const resetIndex = -1;

const initGameState = {
    displayMap: true,
    questionIndex: resetIndex,
    stageIndex: 0
}

export default function GameComponent(props) {
    const game = props.game;
    const [gameState, setGameState] = useReducer(gameHandler, initGameState);
    
    useEffect(() => {
        handleGamePhase(gameState.stageIndex);
    }, [gameState.stageIndex]);
    
    function gameHandler(prevState, action) {
        const questionIndex = prevState.questionIndex + action[_reducerDict.modifier];
        const [newQuestionIndex, newStageIndex] = handleStageIndex(prevState.stageIndex, questionIndex);
        const displayMap = newStageIndex < 0 ? false : newQuestionIndex === resetIndex;

        return {
            ...prevState, 
            questionIndex: newQuestionIndex, 
            stageIndex: newStageIndex, 
            displayMap: displayMap
        };
    }
    
    function handleStageIndex(stageIndex, questionIndex) {
        if (questionIndex < resetIndex) {
            const newQuestionIndex = getPreviousStageQuestionsAmount(stageIndex) - 1;
            return [newQuestionIndex, stageIndex + _modifiers.decrement];
        }
        
        if (questionIndex >= game.getStage(stageIndex).getQuestionsAmount()) {
            return [resetIndex, stageIndex + _modifiers.increment];
        }
        
        return [questionIndex, stageIndex];
    }
    
    function getPreviousStageQuestionsAmount(stageIndex) {
        if (stageIndex - 1 >= 0)
            return game.getStage(stageIndex - 1).getQuestionsAmount();
        return 0;
    }
    
    function handleGamePhase(stageIndex) {
        if (stageIndex < 0) {
            props.setPhase(_modifiers.decrement);
        }
        
        if (stageIndex >= game.getStagesAmount()){
            props.setPhase(_modifiers.increment);
        }
    }
    
    function onClickHandler(event) {
        event.preventDefault();
        setGameState({
            [_reducerDict.modifier]: _modifiers[event.target.name]
        });
    }
    
    return(
        <div>
            {
                gameState.displayMap && gameState.stageIndex < game.getStagesAmount() &&
                <MapComponent
                    map={game.getStage(gameState.stageIndex).getMap()}
                    setGameState={onClickHandler}
                />
            }
            {
                gameState.questionIndex >= 0 && gameState.stageIndex < game.getStagesAmount() &&
                <QuestionPage
                    question={game.getStage(gameState.stageIndex).getQuestionObj(gameState.questionIndex)}
                    setGameState={onClickHandler}
                    player={game.getPlayer()}
                />
            }
        </div>
    )
} 