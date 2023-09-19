const listOfNeighbors = [["Canada", "Mexico"],["Spain"],["Norway", "Sweden", "Russia"],];

console.log(`the array length is ${listOfNeighbors.length}`);

    
for (let i = 0; i < listOfNeighbors.length; i++){
    for (let j = 0 ; j < listOfNeighbors[i].length; j++){
        console.log(`Neighbors:${listOfNeighbors[i][j]}`);
    }
    
}





