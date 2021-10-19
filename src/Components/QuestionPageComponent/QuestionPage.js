import "./QuestionPage.css";
import {_buttonModifiers} from "../../Utilities/_valueModifiers";
import AnswerComponent from "./AnswerComponent";

export default function QuestionPage(props) {
    const question = props.question;
    const player = props.player;
    const setGameState = props.setGameState;

    return (
        <div className="question-page-container fixed-page-container">
            <nav className="side-navbar-through-pages"/>
            <header className="question-page-header" />
            <h2 className="question-title">Question {question.getId() + 1}:</h2>
            <AnswerComponent
                player={player}
                question={question}
            />
            <section className="navigation-btns-container">
                <button className="navigation-btn" name={_buttonModifiers.previous} onClick={setGameState}>Previous page</button>
                <button className="navigation-btn" name={_buttonModifiers.next} onClick={setGameState}>Next page</button>
            </section>
        </div>
    )
}