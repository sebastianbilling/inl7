import { useContext } from "react"
import PokemonContext from "../../utils/PokemonsContext"
import { useParams } from 'react-router-dom'

const Pokemon = () => {
    const pokemons = useContext(PokemonContext)
    const { name } = useParams()
    const pokemon = pokemons.state.find(object => object.name === name)

    return (
        <p>
            {pokemon.name}
        </p>
    )
}

export default Pokemon