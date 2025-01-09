import Pokedex from "./Pokedex"

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
// List of Pokemon
function Pokegame() {
const hand1 =[];
const hand2 = [...PokemonList];

while (hand1.length < 4) {
    const randomIndex = Math.floor(Math.random() * hand2.length);
    hand1.push(hand2.splice(randomIdx, 1)[0]);
}
// Splits the hand into 2 stacks

const exp1 = hand1.reduce((total, p) => total + p.base_experience, 0);
const exp2 = hand2.reduce((total, p) => total + p.base_experience, 0);
// Calculates the total experience
const isHand1Winner = exp1 > exp2;

return (
    <div>
        <h1>Duel</h1>
        <p>
            <Pokedex pokemon={hand1} totalExp={exp1} isWinner={isHand1Winner} />
            <Pokedex pokemon={hand2} totalExp={exp2} isWinner={!isHand1Winner} />
        </p>
       </div>
)
}

export default Pokegame