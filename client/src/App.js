import { useState } from 'react';
import './App.css';
import Routing from './routes/Routing';
import PokemonContext from './utils/PokemonsContext';

function App() {

  const [sebbesPersonligaRedux, setSebbesPersonligaRedux] = useState([])

  let stejt = {
    state: sebbesPersonligaRedux,
    setState: setSebbesPersonligaRedux
  }

  return (
    <PokemonContext.Provider value={stejt}>
      <Routing />
    </PokemonContext.Provider>
  )
  
}

export default App;
