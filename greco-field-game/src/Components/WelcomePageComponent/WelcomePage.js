import header from "./../../img/page-title-cropped.png";
import map from "./../../img/welcom-page-map.png";

import "./WelcomePage.css";

const WelcomePage = (props) => {
    const changePage = () => {
        props.setNextPage(props.currentPage + 1);
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