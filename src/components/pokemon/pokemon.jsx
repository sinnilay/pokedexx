import "./pokemon.css"
function Pokemon({name,image}){
 return(
    <div className="pokemon">
       <div className="pokemon-Name">{name}</div>
       <div><img className="pokemon-image" src={image} /></div>
    </div>
 )


}

export default Pokemon