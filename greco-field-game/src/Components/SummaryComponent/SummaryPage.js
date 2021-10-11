import "./SummaryPage.css";

export default function SummaryPage(props) {
    const player = props.player;
    const setPhase = props.setPhase;
    const phase = props.currentPhase
    
    
    function onClickHandler() {
        setPhase(phase - 1);
    }
    
    return(
        <section className="summary-page">
            <div className="parchment-container">
                <div className="result-container">
                    <h1>Your result:</h1>
                    <p>{player.getScore()}</p>
                </div>
            </div>
            <button className="navigation-btn summary-navigation-btn" onClick={onClickHandler}>Previous page</button>
        </section>
    );
}