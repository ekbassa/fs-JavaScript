const myArr = [1, 2, 3, 4, 5];

/***************************************          Ex-11.1      ***************************/
const doubleValues = function (arr) {
  const arrDoubles = arr.map((num) => num * 2);
  return arrDoubles;
};

// const res = doubleValues(myArr);
// console.log(res);

/*****************************************         Ex-11.2-2     **************************** */
const onlyEvenValues = function (arr) {
  const arrEven = arr.map((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return arrEven.filter((num) => num !== undefined);
};
// const res = onlyEvenValues(myArr);
// console.log(res);

/***************************************          Ex-11.2-3 ***************************************/

const myArr1 = [12, "hello", 5, 7, "world!", 45, 3, 2, "JavaScript"];

const showFirstAndLast = function (arr) {
  arr.pop();
  arr.shift();
  const stringArrOnly = arr.map((item) => {
    if (typeof item === "string") {
      return item;
    }
  });
  return stringArrOnly.filter((item) => item !== undefined);
};

// const res = showFirstAndLast(myArr1);
// console.log(res);

/***************************************        Ex-2.11-4    ****************************** */

function vowelCount(str) {
  const lowerCase = str.toLowerCase();

  const vowelLetters = ["a", "e", "i", "o", "u"];

  const vowelsObject = {};

  for (let char of lowerCase) {
    if (vowelLetters.includes(char)) {
      // if the key already exist increment it otherwise initials it by one

      vowelsObject[char] = vowelsObject[char] ? vowelsObject[char] + 1 : 1;
    }
  }
  return vowelsObject;
}

// const result = vowelCount('Hello World! where are you');
// console.log(result);

/*******************************************        Ex-11.2-5                   ************************************ */
const capitalize = function (str) {
  return str.toUpperCase();
};

// const res = capitalize("hello how are you!");
// console.log(res);

/******************************************************      Ex-11.2-6            ************************************ */
const shiftLetters = function (str) {
  
  // convert int an array
  const characters = str.split('');
  console.log(characters)

  // loop over the array and shift down

  const shiftArr = characters.map((letter)=>{
    if (letter >='a' && letter <= 'z'){
        return String.fromCharCode(((letter.charCodeAt(0) - 97 + 25) % 26) + 97); 
    }else if (letter >= 'A' && letter <= 'Z') {
        return String.fromCharCode(((letter.charCodeAt(0) - 65 + 25) % 26) + 65);
    }else {
        // Non-alphabetic characters remain unchanged
        return letter;
    }

  })
  return shiftArr.join(' ')
    
};

const res = shiftLetters('abcde dc bd');
console.log(res);  // Output: 'abcd cb ac'








/*************************************************    Ex-11.2-7         ******************************************** */

function swapCase(str) {
  //convert to lowercase
  str.toLowerCase();

  // convert in to an array
  const arr = str.split(" ");

  //capitalize each word in an odd index

  const capitalizeArr = arr.map((word, index) => {
    if (index % 2 !== 0) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });
  // convert back to string
  return capitalizeArr.join(" ");
}

// const res = swapCase("hello how are you!");
// console.log(res);
