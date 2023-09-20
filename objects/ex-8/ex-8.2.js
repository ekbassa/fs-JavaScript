const myCountry = {
    name: 'Israel',
    capital: 'Jerusalem',
    language: 'hebrew',
    population: 9000000,
    neighbors: ['jordan','lebanon','syria','egypt'],
    
    describe: function(){
        return `${this.name}
        has ${this.population} people, their mother tongue is ${this.language}, they
        have ${this.neighbors.length} countries and a capital called
        ${this.capital}`
    },

    isIsland: function(){
       return this.neighbors.length > 0 ? myCountry.isIsland = false : myCountry.isIsland = true;
    }
}

let details = myCountry.describe();
console.log(details);
console.log('--------------------------------------');

console.log(myCountry);

// adding the new property by calling the isIsland function

let addNewProperty = myCountry.isIsland();
console.log(myCountry)