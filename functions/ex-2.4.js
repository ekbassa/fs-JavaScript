const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const currentDate= new Date();  // gets the current date 

 // since that weekday is an array, we extract the right item according the index 
 // that was  received from --> grtDay() function

let day = weekday[currentDate.getDay()];      
console.log(day);

let dayInMonth =currentDate.getMonth();
console.log(dayInMonth+1);

let monthName = month[currentDate.getMonth()]
console.log(monthName)

let curentYear = currentDate.getFullYear();
console.log(curentYear);

