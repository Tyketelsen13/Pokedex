import './Pokecard.css';

const PokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonList}.png'

function Pokecard({ id, name, type, base_experience, }) {
    return (
        <div style={{width: '200px', margin: '10px'}}>
            <img src={PokeAPI.replace('$PokemonList', id)} alt={name} />
            <h3 id='pokeName'>{name}</h3>
            <p id='pokeType'>Type: {type}</p>
            <p id='pokexp'>Base Experience: {base_experience}</p>
        </div>
    )
}

export default Pokecard