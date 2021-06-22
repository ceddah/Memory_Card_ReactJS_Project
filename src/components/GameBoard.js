import React, {useState,useEffect} from 'react'
import Card from './Card';
import { Ring } from 'react-spinners-css';
 
const GameBoard = ({pokemons,setScore,score}) => {
    const [gameOver, setGameOver] = useState(false);
    const [clickedCards, setClickedCards] = useState([]);
    const [currentDeck, setCurrentDeck] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = pokemons;

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
        setCurrentDeck(cards);
    }

    const renderCards = () => {
        return currentDeck.map(card => <Card key={card.id} handleClick={handleClick} {...card} />)
    }

    const handleClick = (id) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
        checkIsGameOver(id);
        setClickedCards(c => [...c, id]);
        selectRandomCards();
        const areAllCardsInvalid = currentDeck.every(card => clickedCards.includes(card));
        while(areAllCardsInvalid) {
            selectRandomCards(); 
        }
    }
                                    
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
                {loading ? <Ring color="#f4f4f4" /> : renderCards()}
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
