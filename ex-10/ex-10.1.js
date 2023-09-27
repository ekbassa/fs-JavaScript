function isString(str, callback) {
  if (typeof str === "string") {
    callback(str);
  }
  else{
    console.log(`${str}: Is not a string!`)
  }
}

function myString(str) {
  console.log(str);
}

isString("hello from callback!", myString);
// isString(123, myString);
