import React from 'react'
import Logo from '../images/logo.png';
            
const ScoreBoard = ({score,topscore}) => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__banner">
                <img src={Logo} alt="game-logo"/>
                <h1>Poke-Zone</h1>
            </div>
            <div className="scoreboard__scores">
                <h4 className="top-score"><span>Top Score:</span> {topscore}</h4>
                <h2 className="current-score">Current Score: {score} / 100</h2>
            </div>
        </div>
    )
}

export default ScoreBoard
