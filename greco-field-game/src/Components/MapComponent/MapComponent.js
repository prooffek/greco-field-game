import "./MapContent.css";
import {_buttonModifiers, _modifiers} from "../Utilities/_valueModifiers";
import {_reducerDict} from "../Utilities/_reducerDict";

const MapComponent = (props) => {
    // const mapIndex = Math.floor(props.currentPage / 2) + 1;
    const mapName = props.map;
    const setGameState = props.setGameState;
    
    console.log("map: ", mapName);

    // function onClickHandler(event) {
    //     event.preventDefault();
    //     setGameState({
    //         [_reducerDict.modifier]: _modifiers[event.target.name]
    //     });
    // }
    
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
