/**The following exercise contains the following subjects:
● prototype
● this
Instructions
1. Build your own filter method with the help of prototypes
2. Build your own find method with the help of prototypes
Extra
3. Build your own reduce method with the help of prototypes */


// 1. my customer filter
Array.prototype.filterGraterThan = function(threshold){
    const filteredArray = [];

    for (let i=0; i < this.length; i++){
        if (this[i] > threshold){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}

// invoke the prototype function with a given array



/******************************************************************************************************** */

/**2. Build your own find method with the help of prototypes */

Array.prototype.findFirstStringGreaterThan = function(minimum){

    for (let i=0; i < this.length; i++){
        if (typeof(this[i] === 'string') && this[i].length > minimum){
            return this[i]
        }
    }

    // Return undefined if no element satisfies the condition

    return undefined;
}


const numbers = [12,5,77,83,22,3,12,22,'str',90,'hello',98,78,'tomato',34,22,'orange'];

const filteredNumbers = numbers.filterGraterThan(55);
console.log(`filteredNumbers: ${filteredNumbers}`);

const str = numbers.findFirstStringGreaterThan(5);
console.log(`String greater : ${str}`);

/********************************************************************************************** */


