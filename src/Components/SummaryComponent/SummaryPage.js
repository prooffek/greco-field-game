import "./SummaryPage.css";
import {_gameReducerActions, _state} from "../../Utilities/_dictionaries";

export default function SummaryPage(props) {
    const game = props.state[_state.game];
    const player = game.getPlayer();
    const questions = game.getAllQuestions();
    
    const isCorrect = question => question.isAnswerCorrect(player.getAnswer(question.getId()));
    
    const resetGame = () => {
        props.setState({
            type: _gameReducerActions.resetGame
        })
    }
    
    return(
        <section className="summary-page">
            <div className="summary-btns-container">
                <button className="summary-btn" onClick={resetGame}>Play again</button>
            </div>
            <div className="parchment-container">
                <div className="result-container">
                    <h1>Your result: {"\t\t"} {player.getScore()}</h1>
                </div>
                    <div className="summary-table scrollable">
                        {questions.map(question => 
                            <div>
                                <h2>Question {question.getId() + 1}</h2>
                                <h3>{question.getQuestionText()}</h3>
                                {
                                    !isCorrect(question) &&
                                    <p>
                                        <span className="correct-answer">
                                            Correct answer: 
                                        </span> 
                                        {question.getCorrectAnswer()}
                                    </p>
                                }
                                <p>
                                    <span className={isCorrect(question) ? "correct-answer" : "incorrect-answer"}>
                                        Your answer: 
                                    </span>
                                    {player.getAnswer(question.getId())}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
        </section>
    );
}