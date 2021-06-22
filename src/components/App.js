import React, {useState,useEffect} from 'react'
import './styles/App.scss'
import useFetchPokemons from './useFetchPokemons'
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

const App = () => {
    const {pokemons} = useFetchPokemons();
    const [score,setScore] = useState(0);
    const [topscore,setTopscore] = useState(0)

    if(score > topscore) {
        setTopscore(score);
    }
                                          
    useEffect(() => {
        const savedTopscore = JSON.parse(localStorage.getItem('TopScore'));
        if(savedTopscore) {
            setTopscore(savedTopscore);
        }
        localStorage.setItem('TopScore', JSON.stringify(topscore));
    },[topscore])

    return (
        <div className="App">
            <ScoreBoard score={score} topscore={topscore} />
            <GameBoard pokemons={pokemons} setScore={setScore} setTopscore={setTopscore} score={score} />
        </div>
    )
}

export default App