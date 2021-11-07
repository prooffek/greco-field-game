import "./QuestionPage.css";
import {_buttonModifiers} from "../../Utilities/_dictionaries";
import AnswerComponent from "./AnswerComponent";
import LanguagesBar from "../LanguageBar/LanguagesBar";

export default function QuestionPage(props) {
    const question = props.question;
    const player = props.player;
    const setGameState = props.setGameState;
    const words = props.words;
    const languageCode = props.languageCode;
    const setMainState = props.setMainState;

    const classNames = {
        container: "column-flags-container",
        flag: "column-flag",
        selected: "column-selected-flag",
        notSelected: "column-not-selected-flag",

    }

    return (
        <div className="question-page-container fixed-page-container">
            {/*<nav className="side-navbar-through-pages"/>*/}
            <LanguagesBar
                setState={setMainState}
                language={languageCode}
                classNames={classNames}
            />
            <header className="question-page-header" />
            <h2 className="question-title">{words.question} {question.getId() + 1}:</h2>
            <AnswerComponent
                player={player}
                question={question}
                setMainState={setMainState}
            />
            <section className="nav-btns-container">
                <button className="nav-btn question-nav-btn" name={_buttonModifiers.previous} onClick={setGameState}>{words.prevPage}</button>
                <button className="nav-btn question-nav-btn" name={_buttonModifiers.next} onClick={setGameState}>{words.nextPage}</button>
            </section>
        </div>
    )
}