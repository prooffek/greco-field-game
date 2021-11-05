import "./SummaryPage.css";
import {_gameReducerActions, _state} from "../../Utilities/_dictionaries";

export default function SummaryPage(props) {
    const game = props.state[_state.game];
    const player = game.getPlayer();
    const questions = game.getAllQuestions();
    const language = props.language;
    
    const isCorrect = question => question.isAnswerCorrect(player.getAnswer(question.getId()));
    
    const resetGame = () => {
        props.setState({
            type: _gameReducerActions.resetGame
        })
    }
    
    return(
        <section className="summary-page">
            <div className="summary-btns-container">
                <button className="summary-btn" onClick={resetGame}>{language.playAgain}</button>
            </div>
            <div className="parchment-container">
                <div className="result-container">
                    <h1>{language.result}:</h1>
                    <p className="player-score">{player.getScore()}</p>
                </div>
                    <div className="summary-table scrollable">
                        {questions.map(question => 
                            <div>
                                <h2>{language.question} {question.getId() + 1}</h2>
                                <h3>{question.getQuestionText()}</h3>
                                {
                                    !isCorrect(question) &&
                                    <p>
                                        <span className="correct-answer">
                                            {language.correctAnswer}: 
                                        </span> 
                                        <span className="answer-text">
                                            {question.getCorrectAnswer()}
                                        </span>
                                    </p>
                                }
                                <p>
                                    <span className={isCorrect(question) ? "correct-answer" : "incorrect-answer"}>
                                        {language.yourAnswer}: 
                                    </span>
                                    <span className="answer-text">
                                        {player.getAnswer(question.getId())}
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
        </section>
    );
}