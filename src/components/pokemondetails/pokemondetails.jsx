import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./detail.css"


function Pokemondetails(){
    const {id} = useParams()
    const [pokemon,setpokemon] = useState([])
    // console.log(id);
    async function  DownloadPokemon() {
        const deatils = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log(deatils.data);
        setpokemon( {
            name:deatils.data.name,
            image:deatils.data.sprites.other.dream_world.front_default,
            height:deatils.data.height,
            weight:deatils.data.weight,
        })    
    }
    console.log(pokemon);
    
    useEffect(()=>{
      DownloadPokemon()
     
    },[])
    return (
        <div className="pd">
            <h1>NAME:{pokemon.name}</h1>
            <img src={pokemon.image} alt="img goes here" />
            <h3>height:{pokemon.height}ft</h3>
            <h3>weight:{pokemon.weight}kg</h3>
            
        </div>
    )
}

export default Pokemondetails