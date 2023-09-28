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
      return item
    }
  });
  return stringArrOnly.filter((item)=>item !== undefined);
};

const res = showFirstAndLast(myArr1);
console.log(res);
