/*--Delete the wrong answers--


1. Which of the following is/are strings?

c) '4'



2. Which of the following is/are numbers?
a) 4
b) 4.0

d) -4



Which of the following is/are booleans?
a) true
b) false



4. What is the result of 80 + 71.2?
a) 151.2



5. What is the result of "80" + 71.2?

c) "8071.2"



6. Does 100 + 30 produce a number or a string?
a) number



7. Does "100" + 30 produce a number or a string?

b)string
*/






//create three different ways to declare variables

var name1 = 'paul';
let name2 = 'Mark'
const name3 = 'Luc'



//declare a variable and reassign a value to it

let age = 23;

//create a variable and after that assign a string

let str;
str = 'He \'s got it!'

//with its value being: He's got it!




/*1. create a variable and assign a value on how
  // much a restaurant bill is. */

let mealPrice = 85.88;


/*2. create a variable and assign a value on how
much tax they should pay. */

const taxRate = 0.17;

/*3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $. */

let totalPay = mealPrice *(1 + taxRate);


// Round the number 50.6 to its nearest integer
//Create a variable that is undefine

let roundedNum;
roundedNum = 87.548;
roundedNum =  Math.round(roundedNum);
console.log()