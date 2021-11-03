import EN from "./../../img/Flags/United_Kingdom.png";
import PL from "./../../img/Flags/Poland.png";
import IT from "./../../img/Flags/Italy.png";
import EL from "./../../img/Flags/Greece.png";
import {_gameReducerActions, _languages} from "../../Utilities/_dictionaries";

const notImplemented = [_languages.italian]

export default function LanguagesBar(props) {
    const setState = props.setState;
    
    function clickHandler(event) {
        const clicked = event.target.name;
        return (setState({
            type: _gameReducerActions.setLanguage,
            language: notImplemented.includes(clicked) ? _languages.english : clicked
        }));
    }
    
    return(
        <div className="flags-container">
            <img src={EN} alt="EN-map" className="flag" name={_languages.english} onClick={clickHandler}/>
            <img src={PL} alt="PL-map" className="flag" name={_languages.polish} onClick={clickHandler}/>
            <img src={EL} alt="PL-map" className="flag" name={_languages.greek} onClick={clickHandler}/>
            <img src={IT} alt="IT-map" className="flag" name={_languages.italian} onClick={clickHandler}/>
        </div>
    )
}