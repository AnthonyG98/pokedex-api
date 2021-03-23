import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"
import pokeball from "./pokeball.jpg"

const App = () => {
  const [pokemon, setPokemon] = useState("")
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray);
      console.log(res)
    } catch(e){
      console.log(e)
    }
  }
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  useEffect(() => {
    getPokemon();
  }, [])
  return(
    <div className="App">
      <img className="background-img" src={pokeball} alt="pokeball"/>
      <div className="overlay"></div>
     <form onSubmit={handleSubmit}>
      <label>
          <input type="text" onChange={handleChange} placeholder="Enter pokemon name."/>
      </label>
     </form>
     {pokemonData.map((data) => {
       return(
         <div>
            <div className="container">
            <img className="poke-img" src={data.sprites["front_default"]} alt="of pokemon"/>
            <div className="div-table">
              <div className="div-table-body"></div>
              <div className="div-table-row">
                <div className="div-table-cell">Type:</div>
                <div className="div-table-cell">{pokemonType}</div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">Height:</div>
                <div className="div-table-cell">{" "}{Math.round(data.height * 3.9)}"</div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">Weight:</div>
                <div className="div-table-cell">{" "}{Math.round(data.weight / 4.3)} lbs</div>
              </div>
              <div className="div-table-row">
                <div className="div-table-cell">Number of battle:</div>
                <div className="div-table-cell">{data.game_indices.length}</div>
              </div>
            </div>
         </div>
          </div>
       )
     })}
    </div>
    )
}




export default App;
