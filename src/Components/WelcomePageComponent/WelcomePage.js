import header from "./../../img/page-title-cropped.png";
import map from "./../../img/welcom-page-map.png";

import "./WelcomePage.css";
import {_gameReducerActions, _modifiers} from "../../Utilities/_dictionaries";
import LanguagesBar from "./LanguagesBar";

const WelcomePage = (props) => {
    const language = props.language;
    const setState = props.setState;
    const words = props.words
    
    const changePage = () => { 
        return (setState({
            type: _gameReducerActions.setPhase, 
            [_gameReducerActions.modifier]: _modifiers.increment
        }));
    }
    
    return(
        <div className="welcome-page fixed-page-container">
            <LanguagesBar
                setState={setState}
                language={language}
            />
            <img className="welcome-page-header" src={header} alt="welcome-page-header" />
            <img className="welcome-page-map" src={map} alt="welcome-page-map" />
            <button type="button" onClick={changePage} className="nav-btn start-btn">{words.start}</button>
        </div>
    )
}

export default WelcomePage;