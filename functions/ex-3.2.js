/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

const welcome = () => `Welcome to Appleseeds Bootcamp!`;

const power = (a) => Math.pow(a,2);

const squareRoot = (function(a){
    return Math.sqrt(a);
})(9);

const randomNumbers = (function(a,b){
    return (Math.random()*(a - b) + b).toFixed(3);
}) (3,2)

console.log(randomNumbers)



