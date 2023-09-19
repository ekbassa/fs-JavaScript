const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); // remove Greg
people.pop();  // remove james

people.unshift(`Matt`);   // adding Matt
people.push(`Bassam`); // adding my name to the end

let arrayWithoutMarryAndMatt = people.slice(2); // copy array without Marry and Matt
let marryIndex = people.indexOf(`Mary`); // index of mary

let fooIndex = people.indexOf(`Foo`); // index of Foo is: -1 (not found)


// current people array : ['Matt', 'Mary', 'Devon', 'Bassam']

people.splice(0,1,`Greg`);
people.splice(-1,1,`James`);
people.splice(2,1,`Elizabeth`,`Artile`);

// new copy and concat
withBob = people.concat("Bob");


