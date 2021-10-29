import "./MapContent.css";
import {_buttonModifiers} from "../../Utilities/_dictionaries";

const MapComponent = (props) => {
    const mapName = props.map;
    const setGameState = props.setGameState;
    
    return (
        <section className="video-page-container">
            <video className="video-background-container" autoPlay loop muted >
                <source src={mapName} type="video/mp4" />
            </video>
            <section className="nav-btns-container map-nav-btns-container">
                <button className="nav-btn on-map-btn" name={_buttonModifiers.previous} onClick={setGameState}>One step back</button>
                <button className="nav-btn on-map-btn" name={_buttonModifiers.next} onClick={setGameState}>I'm on the spot!</button>
            </section>
        </section>
        
    )
}

export default MapComponent;
