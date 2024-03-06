import PokemonList from "../PokemonList/PokemonList"
import Search from "../search/search"
import "./pokedex.css"

function Pokedex(){

 return (
    <div className="pokedexwrapper">
        <h1 className="podex-headding">POKEDEX</h1>
        <Search />
        <PokemonList />
    </div>
 )
}

export default Pokedex