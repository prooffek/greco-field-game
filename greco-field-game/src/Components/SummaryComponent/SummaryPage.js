import "./SummaryPage.css";

export default function SummaryPage(props) {
    const game = props.game;
    const player = game.getPlayer();
    const questions = game.getAllQuestions();
    console.log("answer", player.getAnswer(questions[0].getId()));
    
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
                <div className="result-container">
                    {questions.map(question =>
                        <div>
                            <h2>Question {question.getId() + 1}</h2>
                            <h3>{question.getQuestionText()}</h3>
                            <p>Correct answer: {question.getCorrectAnswer()}</p>
                            <p>Your answer: {player.getAnswer(question.getId())}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}