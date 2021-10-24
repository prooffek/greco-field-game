import "./SummaryPage.css";
import {_state} from "../../Utilities/_dictionaries";

export default function SummaryPage(props) {
    console.log("summary page");
    
    const game = props.state[_state.game];
    const player = game.getPlayer();
    const questions = game.getAllQuestions();
    
    const isCorrect = question => question.isAnswerCorrect(player.getAnswer(question.getId()));
    
    // const setPhase = props.setPhase;
    // const phase = props.currentPhase
    
    
    // function onClickHandler() {
    //     setPhase(phase - 1);
    // }
    
    return(
        <section className="summary-page">
            <div className="parchment-container">
                <div className="result-container">
                    <h1>Your result:</h1>
                    <p>{player.getScore()}</p>
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