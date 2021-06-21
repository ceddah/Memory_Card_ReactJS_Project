import React, {useState,useEffect} from 'react'
import Card from './Card';

const GameBoard = ({pokemons,setScore,setTopscore}) => {
    const [gameOver, setGameOver] = useState(false);
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
        let currentidx = randomIndex();
        const item = data[currentidx];
        while (cards.length < 5) {
            if(cards.includes(item)) {
                currentidx = randomIndex();
            } else {
                cards.push(data[currentidx]);
            }
            // cards.push(data[currentidx]);
        }
        console.log(cards);
        // setCurrentDeck(cards);
    }

    const renderCards = () => {
        return currentDeck.map(card => <Card key={card.id} handleClick={handleClick} {...card} />)
    }

    const handleClick = (id) => {
        checkIsGameOver(id);
        setClickedCards(c => [...c, id]);
        selectRandomCards();
        console.log(clickedCards);
    }

    const checkIsGameOver = (id) => {
        if(clickedCards.includes(id)) {
            setGameOver(true);
        } else {
            return
        }
    }

    return (
        <div className="game-board">
            {!gameOver && <div className="cards">
                {renderCards()}
            </div>}
        </div>
    )
}

export default GameBoard
