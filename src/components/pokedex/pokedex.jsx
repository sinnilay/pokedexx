import PokemonList from "../PokemonList/PokemonList"
import Search from "../search/search"
import "./pokedex.css"

function Pokedex(){

 return (
    <div className="pokedexwrapper">
        
        <Search />
        <PokemonList />
    </div>
 )
}

export default Pokedex