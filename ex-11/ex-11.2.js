const myArr = [1, 2, 3, 4, 5];

/***************************************          Ex-11.1      ***************************/ 
const doubleValues = function (arr) {
  const arrDoubles = arr.map((num) => num * 2);
  return arrDoubles;
};

// const res = doubleValues(myArr);
// console.log(res);

/*****************************************         Ex-11.2      **************************** */
const onlyEvenValues = function(arr){
    const arrEven = arr.map((num) => {
        if ( num % 2 === 0){
            return num
        }
    })
    return arrEven.filter((num)=> num !== undefined);
}
const res = onlyEvenValues(myArr);
console.log(res);

