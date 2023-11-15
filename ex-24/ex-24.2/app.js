/**The following exercise contains the following subjects:
● prototypes
Instructions

You are given a function, Pokeman, that takes three
parameters, pokemonName, pokemonType, an array of
different pokemon attack methods, pokemonAttackList.
1. Create three instances of the Pokemon and save them in
a variable.
2. Using prototype properties, add the following methods:
● A method called callPokemon will print the following:
“I choose you, <pokemon name>
● • A method called attack that takes one parameter,
an attack number, that will print the specific attack
method from the pokemonAttackList array as the
following: “<pokemon name> used <attack method>”
Call each pokemon with the 2 methods you created.


Here is the Pokemon function:
 */

function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

const attackList = ['eating','burning','shotting'];

//1.
const pok1 = new Pokemon('Bugzilla','killer',attackList);
const pok2 = new Pokemon('Martinis','killer',attackList);
const pok3 = new Pokemon('Diego','killer',attackList);

//2.
Pokemon.prototype.callPokemon = function(){
    console.log(`“I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(num){

    console.log(`${this.name} used ${this.attackList[num]}`);
}

pok2.callPokemon();

pok1.attack(1);

