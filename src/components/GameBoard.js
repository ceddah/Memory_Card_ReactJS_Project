import React, {useState,useEffect} from 'react'
import Card from './Card';

const GameBoard = ({pokemons,setScore,score,setTopscore}) => {
    const [gameOver, setGameOver] = useState(true);
    const [clickedCards, setClickedCards] = useState([]);
    const [currentDeck, setCurrentDeck] = useState([]);
    const data = pokemons;

    // const randomIndex = () => Math.floor(Math.random() * data.length + 1);
    //Do a check to see if all five cards are inside t he clickedCards and it they are then
    //get five new cards

    useEffect(() => {
        if(data[0] !== undefined) {
            selectRandomCards();
        }
    }, [data])

    const randomIndex = () => Math.floor(Math.random() * data.length);
    const selectRandomCards = () => {
        const cards = [];
        const idxArray = [];
        let currentidx = randomIndex();
        while (idxArray.length < 5) {
            if(idxArray.includes(currentidx)) {
                currentidx = randomIndex();
            } else {
                idxArray.push(currentidx);
            }
        }
        idxArray.forEach(idx => cards.push(data[idx]));
        // console.log(cards);
        setCurrentDeck(cards);
    }

    const renderCards = () => {
        return currentDeck.map(card => <Card key={card.id} handleClick={handleClick} {...card} />)
    }

    const handleClick = (id) => {
        checkIsGameOver(id);
        setClickedCards(c => [...c, id]);
        selectRandomCards();
    }
    console.log(clickedCards);

    const checkIsGameOver = (id) => {
        if(clickedCards.includes(id)) {
            setGameOver(true);
        } else {
            setScore(currScore => currScore + 1);
        }
    }

    const resetGame = () => {
        setClickedCards([]);
        setGameOver(false);
        setScore(0);
        selectRandomCards();
    }

    return (
        <div className="game-board">
            {!gameOver && <div className="cards">
                {renderCards()}
            </div>}
            {gameOver && <div className="gameOver-screen">
                <h1>Game is Over!</h1>
                <h4>Your final score is: {score}</h4>
                <button onClick={resetGame}>Play Again</button>
            </div>}
        </div>
    )
}

export default GameBoard
