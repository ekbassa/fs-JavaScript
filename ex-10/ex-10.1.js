// function isString(str, callback) {
//   if (typeof str === "string") {
//     callback(str);
//   } else {
//     console.log(`${str}: Is not a string!`);
//   }
// }

// function myString(str) {
//   console.log(str);
// }

// isString("hello from callback!", myString);
// // isString(123, myString);

//*********************************************************  Ex-10.1-2 */

// function firstWordUpperCase(str, callback) {
//   // convert to an array;
//   let arr = str.split(' ');
//   callback();
// }

// function capitalize(str) {
//   // pattern convert to an array
//   const arr = str.split(' ');

//   // extract the first item from the array and capitalize all the letters
//   let firstWord = arr.shift().toUpperCase();

//   //put the word back to the first position into the array of strings
//   arr.unshift(firstWord);

//   // convert back to a string

//   return arr.join(' ');
// }

// firstWordUpperCase('hello every one!',capitalize);


const string = "javascript is nice"

function firstWordUpperCase(str, callback){
  const [first, ...rest] = str.split(' ');
  const result = [first.toUpperCase(), ...rest].join(' ')
  return callback(result)
}

function dashes(strDashes){
  return strDashes.split(' ').join('-')
}

console.log(firstWordUpperCase(string, dashes))

