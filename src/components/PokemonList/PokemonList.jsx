import { useEffect, useState } from "react"
import axios from "axios";
import "./pokemonlist.css"
import Pokemon from "../pokemon/pokemon";
function PokemonList(){
  const [pokedex_url,setpokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')
  const  [pokemonlist,setpokemonist] = useState([])
  const  [isloading,setisloading] = useState(true)
  const [nexturl,setnexturl] = useState(null)
   const [prevurl,setprevurl] = useState(null)

  //  const [pokemonlistState,setpokemonlistState] = useState({
  //   // pokedex_url:'https://pokeapi.co/api/v2/pokemon',
  //   pokemonlist:[],
  //   isloading:true,
  //   nexturl:null,
  //   prevurl:null

  //  })

   async  function downloadpokemon(){
    setisloading(true)
    // setpokemonlistState({...pokemonlistState, isloading:true})

        const response = await axios.get(pokedex_url)
        console.log(response);
        setnexturl(response.data.next)
        setprevurl(response.data.previous)
        const results =  response.data.results;
        // console.log(results);

       const pokemonresultpromise= results.map ( (pokemon) => axios.get(pokemon.url));
      //  console.log(pokemonresultpromise);
       
        const pokemondata= await axios.all(pokemonresultpromise)
        
        setpokemonist(pokemondata.map((pokeData) => {
         const pokemon = pokeData.data
        const res =  {
          id:pokemon.id,
          name:pokemon.name,
          image:pokeData.data.sprites && pokeData.data.sprites.other ? pokeData.data.sprites.other.dream_world.front_default : pokeData.data.sprites.front_shiny,
          types:pokemon.types
         }
        //  console.log(res);
        //  setpokemonist(res)
         setisloading(false)
         return res;
         
        }))
      }
    
   
    useEffect ( ()=>{
     
        downloadpokemon()

    },[pokedex_url]);
   
  return (
    <div className="pokemon-list-wrapper">
      
      <div className="pokemon-wrapper">
      {(isloading) ? <h1>LOADING DATA ...</h1> : 
         pokemonlist.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
      } </div>
      <div className="controls">
        <button disabled={prevurl==undefined} onClick={()=>setpokedex_url(prevurl)}>Prev</button>
        <button disabled={nexturl==undefined} onClick={()=> setpokedex_url(nexturl)} >Next</button>
      </div>
    </div>
  )
}
export default PokemonList