import React, {useState} from 'react'
import './styles/App.scss'
import useFetchPokemons from './useFetchPokemons'
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

//Have a state that is holding infomation about all the cards we clicked on
//And when inserting new card choose random card and check if card has been already clicked

const App = () => {
    const {pokemons} = useFetchPokemons();
    const [score,setScore] = useState(0);
    const [topscore,setTopscore] = useState(0)

    if(score > topscore) {
        setTopscore(score);
    }

    return (
        <div className="App">
            <ScoreBoard score={score} topscore={topscore} />
            <GameBoard pokemons={pokemons} setScore={setScore} setTopscore={setTopscore} score={score} />
        </div>
    )
}

export default App