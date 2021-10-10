import "./QuestionPage.css";
import {_buttonModifiers} from "../../Utilities/_valueModifiers";

export default function QuestionPage(props) {
    const question = props.question;
    const setGameState = props.setGameState;

    return (
        <div className="question-page-container fixed-page-container">
            <header className="question-page-header" />
            <h2 className="question-title">Question {question.getId() + 1}:</h2>
            <section className="navigation-btns-container">
                <button className="navigation-btn" name={_buttonModifiers.previous} onClick={setGameState}>Previous page</button>
                <button className="navigation-btn" name={_buttonModifiers.next} onClick={setGameState}>Next page</button>
            </section>
        </div>
    )
}