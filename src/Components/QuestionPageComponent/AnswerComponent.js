import {useState} from "react";
import {_gameReducerActions} from "../../Utilities/_dictionaries";

export default function AnswerComponent(props) {
    const question = props.question;
    const player = props.player;
    const setMainState = props.setMainState;
    const answers = question.getAnswersList();
    
    const [selectedAnswer, setSelectedAnswer] = useState(player.getAnswer(question.getId()));
    
    const answerHandler = (event) => {
        event.preventDefault();
        const selected = parseInt(event.target.value, 10);
        const selectedAnswer = {
            questionId: question.getId(),
            isCorrect: question.isAnswerCorrect(selected),
            answerId: selected
        }
        
        player.addAnswer(selectedAnswer);
        setSelectedAnswer(selected);
        setMainState({
            type: _gameReducerActions.setAnswers,
            [_gameReducerActions.answer]: selectedAnswer
        })
    }
    
    const isSelected = (answer) => {
        if (answer) {
            const selected = player.getAnswer(question.getId());
            return  selected.answerId === answer.id;
        }
        return false;
    }

    return(
        <section className="question-content-container">
            <p className="question-text">{question.getQuestionText()}</p>
            <div className="answers-container" >
                {answers.map(a =>
                    <button
                        key={`answer_${answers.indexOf(a.id)}`}
                        className={`answer-btn ${isSelected(a) ? "selected-answer-btn" : "unselected-answer-btn"}`}
                        value={a.id}
                        onClick={answerHandler}
                    >
                        {a.text}
                    </button>
                )}
            </div>
        </section>
    );
}