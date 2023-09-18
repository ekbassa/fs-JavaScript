let  language = prompt(`please enter a language:`);
let isIsland = prompt('do you like islands, \'y or \' n');
const population = prompt(`enter the population `);
const country = prompt(`enter country `)


switch(isIsland){
    case 'y': isIsland = true; break;
    case 'n': isIsland = false; break;
}

if (language === `english` && population < 50 && !isIsland){
    console.log(`You should consider living in ${country}`)
} else {
    console.log (`${country} does not meet your criteria`)
}
