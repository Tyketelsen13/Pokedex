import Pokecard from "./Pokecard"
import './Pokedex.css'


const PokemonList = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 10, name: 'Caterpie', type: 'bug', base_experience: 52},
        {id: 14, name: 'Bellsprout', type: 'grass', base_experience: 62},
        {id: 21, name: 'Spearow', type: 'normal', base_experience: 64},
        {id: 24, name: 'Pidgey', type: 'normal', base_experience: 60},
        {id: 27, name: 'Sandshrew', type: 'ground', base_experience: 65},
        {id: 34, name: 'Articuno', type: 'ice', base_experience: 143},
        {id: 35, name: 'Zapdos', type: 'electric', base_experience: 143},
        {id: 38, name: 'Vaporeon', type: 'water', base_experience: 138},
        {id: 49, name: 'Dragonite', type: 'dragon', base_experience: 178},
        {id: 53, name: 'Meowth', type: 'normal', base_experience: 52},
        {id: 64, name: 'Psyduck', type: 'water', base_experience: 63},
        {id: 77, name: 'Ponyta', type: 'fire', base_experience: 109},
        {id: 78, name: 'Raichu', type: 'electric', base_experience: 178},
        {id: 80, name: 'Electrode', type: 'electric', base_experience: 178},
        {id: 95, name: 'Growlithe', type: 'fire', base_experience: 109},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 52, name: 'Meowth', type: 'normal', base_experience: 52},
        {id: 90, name: 'Dragonair', type: 'dragon', base_experience: 147},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}


      ]

function Pokedex({ pokemon = PokemonList }) {
    return (
        <div className="PokemonList">
            {pokemon.map(pokemon => (
                <Pokecard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                base_experience={pokemon.base_experience} 
                />
            ))}
        </div>
        
    )
}

export default Pokedex
