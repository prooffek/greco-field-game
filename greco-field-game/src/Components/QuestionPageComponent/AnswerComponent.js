import {_answers} from "../../Utilities/_wrongAnswersDict";
import {getRandomEl, shuffleList} from "../../Utilities/_utilityFunctions";

export default function AnswerComponent(props) {
    const question = props.question;
    const player = props.player;
    const answers = [question.getCorrectAnswer(), ...getRandomEl(3, _answers)];
    shuffleList(answers);
    
    const answerHandler = (event) => {
        event.preventDefault();
        
        const selectedAnswer = event.target.name;
        player.addAnswer({
                questionId: question.getId(), 
                isCorrect: question.isAnswerCorrect(selectedAnswer)
            }
        );
    }

    return(
        <section className="question-content-container">
            <p className="question-text">{question.getQuestionText()}</p>
            {answers.map(a =>
                <button
                    key={`answer_${answers.indexOf(a)}`}
                    className="answer-btn"
                    name={a}
                    onClick={answerHandler}
                >
                    {a}
                </button>
            )}
        </section>
    );
}