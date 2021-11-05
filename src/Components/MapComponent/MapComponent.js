import "./MapContent.css";
import {_buttonModifiers} from "../../Utilities/_dictionaries";

const MapComponent = (props) => {
    const mapName = props.map;
    const setGameState = props.setGameState;
    const language = props.language;
    
    return (
        <section className="video-page-container">
            <video className="video-background-container" autoPlay loop muted >
                <source src={mapName} type="video/mp4" />
            </video>
            <section className="nav-btns-container map-nav-btns-container">
                <button className="nav-btn on-map-btn" name={_buttonModifiers.previous} onClick={setGameState}>{language.back}</button>
                <button className="nav-btn on-map-btn" name={_buttonModifiers.next} onClick={setGameState}>{language.onSpot}</button>
            </section>
        </section>
        
    )
}

export default MapComponent;
