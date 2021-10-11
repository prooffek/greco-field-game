import "./MapContent.css";
import {_buttonModifiers} from "../../Utilities/_valueModifiers";

const MapComponent = (props) => {
    const mapName = props.map;
    const setGameState = props.setGameState;
    
    return (
        <section className="video-page-container" >
            <video className="video-background-container" autoPlay loop muted >
                <source src={mapName} type="video/mp4" />
            </video>
            <section className="map-navigation-btns-container">
                <button className="navigation-btn" name={_buttonModifiers.previous} onClick={setGameState}>One step back</button>
                <button className="navigation-btn" name={_buttonModifiers.next} onClick={setGameState}>I'm on the spot!</button>
            </section>
        </section>
        
    )
}

export default MapComponent;
