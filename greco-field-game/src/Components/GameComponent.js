import {useEffect, useReducer} from "react";
import {_buttonModifiers, _modifiers} from "../Utilities/_valueModifiers";

const resetIndex = -1;
const firstQuestion = 1;

const initGameState = {
    displayMap: true,
    questionIndex: resetIndex,
    stageIndex: 0
}

export default function GameComponent(props) {
    const game = props.game;
    const [gameState, setGameState] = useReducer(gameHandler, initGameState);

    console.log("game state: ", gameState);
    
    // let stage = game.getStage(gameState.stageIndex)
    // console.log("stage: ", stage);
    //
    // let question = game.getStage(gameState.stageIndex).getQuestionObj(gameState.questionIndex);
    // console.log("question: ", question);
    
    useEffect(() => {
        handleGamePhase(gameState.stageIndex);
    }, [gameState.stageIndex]);
    
    function gameHandler(prevState, action) {
        const questionIndex = prevState.questionIndex + action.modifier;
        const [newQuestionIndex, newStageIndex] = handleStageIndex(prevState.stageIndex, questionIndex);
        const displayMap = newQuestionIndex === resetIndex;

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
            return  game.getStage(stageIndex - 1).getQuestionsAmount();
        return 0;
    }
    
    function handleGamePhase(stageIndex) {
        if (stageIndex < 0) {
            props.setPhase(_modifiers.decrement);
        }
        
        if (stageIndex >= game.getStagesAmount()){
            props.setPhase(_modifiers.increment)
        }
    }
    
    function onClickHandler(event) {
        event.preventDefault();
        setGameState({
            modifier: _modifiers[event.target.name]
        })
    }
    
    return(
        <div>
            <button onClick={onClickHandler} name={_buttonModifiers.previous}>Previous</button>
            <button onClick={onClickHandler} name={_buttonModifiers.next}>Next</button>
        </div>
    )
} 