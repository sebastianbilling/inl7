import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import PokeCard from '../../components/PokeCard'
import PokemonContext from '../../utils/PokemonsContext'
import './Home.css'

const Home = () => {
    const [persons, setPersons] = useState([])
    const globalPokemonState = useContext(PokemonContext)

    useEffect(() => {
        axios.get("http://localhost:3000/persons")
        .then(response => {
            console.log(response)
            setPersons(response.data)    
            globalPokemonState.setState(response.data.results)
        })
    }, []) 



    return (
        <div className="container align-items-center justify-content-center">
            {persons.map(person => <PokeCard key={person.id} pokemon={person}/>) }
        </div>
    )
}

export default Home