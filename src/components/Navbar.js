import React from "react";

function Navbar(props){

    let score = `Score: ${props.score}`;
    let bestScore = `Best score: ${props.bestScore}`;

    return(
        <header>
            <div className="game-info">
                <div className="page-title">
                    Memory game          
                </div>
                <div className="game-instructions">
                    Choose the Avengers one by one. Don't click on any one more than once!
                </div>
            </div>
            <div className="score-info">
                <div className="current-score">{score}</div>
                <div className="best-score">{bestScore}</div>
            </div>
        </header>
    )
}

export default Navbar;