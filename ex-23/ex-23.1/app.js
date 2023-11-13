/*Question 1:
In your own words what will this point to and why?
(Note this is the global scope) */

console.log(this);
// it reference the Global scope

/**************************************************************************************** */

/*Question 2:
a. In your own words what will this point to and why?
b. How can you fix this code?*/

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// a. this points to the name variable within the myObj object, because "this" points to the object that "this"is working on
// b. we can fic that by changing the arrow function to  regular function.

const myFixedObj = {
    name: "Timmy",
    greet: function() {
      console.log(`Hello ${this.name}`);
    },
  };
  myFixedObj.greet();


  /******************************************************************************************************* */
  /**Question 3:
In your own words what will this point to and why?*/

const myFuncDec = function () {
    console.log(this);
}; 

// this refers to the Global object, because the function doesn't have it own `this` 

/********************************************************************************************************* */
/**Question 4:
In your own words what will this point to and why? */

const myFuncArrow = () => {
console.log(this);
};
myFuncArrow(); 

// 'this --> refer to the global object, since it is located within an arrow function

/************************************************************************************************************ */

/* Question 5:
a. In your own words, what will this point to and why?
b. How can you fix this code? */

document.querySelector(".element").addEventListener(() => {
console.log(this);
});

// a. 'this' refers to the global object (window ) , addEventListener is an arrow function
// b.  to fix the code we should use a regular function instead of an arrow function.in this case 'this' will be bind to 
//      the element that triggers the event

//updated code
    document.querySelector(".element").addEventListener("click", function() {
    console.log(this); // 'this' now refers to the element that triggered the click event
});


