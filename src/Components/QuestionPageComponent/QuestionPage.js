import "./QuestionPage.css";
import {_buttonModifiers} from "../../Utilities/_dictionaries";
import AnswerComponent from "./AnswerComponent";

export default function QuestionPage(props) {
    const question = props.question;
    const player = props.player;
    const setGameState = props.setGameState;
    const language = props.language;
    const setMainState = props.setMainState;

    return (
        <div className="question-page-container fixed-page-container">
            <nav className="side-navbar-through-pages"/>
            <header className="question-page-header" />
            <h2 className="question-title">{language.question} {question.getId() + 1}:</h2>
            <AnswerComponent
                player={player}
                question={question}
                setMainState={setMainState}
            />
            <section className="nav-btns-container">
                <button className="nav-btn question-nav-btn" name={_buttonModifiers.previous} onClick={setGameState}>{language.prevPage}</button>
                <button className="nav-btn question-nav-btn" name={_buttonModifiers.next} onClick={setGameState}>{language.nextPage}</button>
            </section>
        </div>
    )
}