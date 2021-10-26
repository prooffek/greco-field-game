import {useState} from "react";

export default function AnswerComponent(props) {
    const question = props.question;
    const player = props.player;
    const answers = question.getAnswersList();
    
    const [selectedAnswer, setSelectedAnswer] = useState(player.getAnswer(question.getId()));
    
    const answerHandler = (event) => {
        event.preventDefault();
        
        const selected = event.target.name;
        
        player.addAnswer({
                questionId: question.getId(), 
                isCorrect: question.isAnswerCorrect(selected),
                answer: selected
            }
        );
        setSelectedAnswer(selected);
    }
    
    const isSelected = (answer) => {
        if (answer) {
            const selected = player.getAnswer(question.getId());
            return answer === selected;
        }
        return false;
    }

    return(
        <section className="question-content-container">
            <p className="question-text">{question.getQuestionText()}</p>
            <div className="answers-container" >
                {answers.map(a =>
                    <button
                        key={`answer_${answers.indexOf(a)}`}
                        className={`answer-btn ${isSelected(a) ? "selected-answer-btn" : "unselected-answer-btn"}`}
                        name={a}
                        onClick={answerHandler}
                    >
                        {a}
                    </button>
                )}
            </div>
        </section>
    );
}