import header from "./../../img/page-title-cropped.png";
import map from "./../../img/welcom-page-map.png";

import "./WelcomePage.css";
import {_gameReducerActions, _modifiers} from "../../Utilities/_dictionaries";

const WelcomePage = (props) => {
    
    const setState = props.setState;
    
    const changePage = () => { 
        return (setState({
            type: _gameReducerActions.setPhase, 
            [_gameReducerActions.modifier]: _modifiers.increment
        }));
    }
    
    return(
        <div className="welcome-page fixed-page-container">
            <img className="welcome-page-header" src={header} alt="welcome-page-header" />
            <img className="welcome-page-map" src={map} alt="welcome-page-map" />
            <button type="button" onClick={changePage} className="start-btn">Start</button>
        </div>
    )
}

export default WelcomePage;