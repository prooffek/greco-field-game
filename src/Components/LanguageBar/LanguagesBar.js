import EN from "./../../img/Flags/United_Kingdom.png";
import PL from "./../../img/Flags/Poland.png";
import IT from "./../../img/Flags/Italy.png";
import EL from "./../../img/Flags/Greece.png";
import {_gameReducerActions, _languages} from "../../Utilities/_dictionaries";

import "./LanguageBar.css"

const notImplemented = [_languages.italian]

export default function LanguagesBar(props) {
    const setState = props.setState;
    const language = props.language;
    const classNames = props.classNames;
    
    function clickHandler(event) {
        const clicked = event.target.name;
        return (setState({
            type: _gameReducerActions.setLanguage,
            language: notImplemented.includes(clicked) ? language : clicked
        }));
    }
    
    const btnClassName = (btnLanguage) => {
        return btnLanguage === language ? classNames.selected : classNames.notSelected
    }
    
    return(
        <div className={classNames.container}>
            <img 
                src={EN} 
                alt="EN-map" 
                className={`${classNames.flag} ${btnClassName(_languages.english)}`} 
                name={_languages.english} 
                onClick={clickHandler}
            />
            <img 
                src={PL} 
                alt="PL-map"
                className={`${classNames.flag} ${btnClassName(_languages.polish)}`} 
                name={_languages.polish} 
                onClick={clickHandler}
            />
            <img 
                src={EL} 
                alt="PL-map"
                className={`${classNames.flag} ${btnClassName(_languages.greek)}`} 
                name={_languages.greek} 
                onClick={clickHandler}
            />
            <img 
                src={IT} 
                alt="IT-map"
                className={`${classNames.flag} ${btnClassName(_languages.italian)}`} 
                name={_languages.italian} 
                onClick={clickHandler}
            />
        </div>
    )
}