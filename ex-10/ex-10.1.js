function isString(str, callback) {
  if (typeof str === "string") {
    callback(str);
  }
}

function myString(str) {
  console.log(str);
}

isString("hello from callback!", myString);
