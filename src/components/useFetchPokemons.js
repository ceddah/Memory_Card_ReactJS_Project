import React, {useState,useEffect} from 'react'


const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
        const tempData = [];
        const fetchData = async (id) => {
            const resp = await fetch(endpoint + id);
            const pokeData = await resp.json();
            tempData.push(pokeData);
            const correctData = tempData.map(poke => {
                const {name,id,sprites: { front_default }} = poke;
                return { name, id, img: front_default };
            })
            if(correctData.length > 99) {
                setPokemons(correctData);
            }
        }

        for(let i = 1; i <= 100; i++) {
            fetchData(i);
        }
    }, [])

    return {pokemons}
}

export default useFetchPokemons
