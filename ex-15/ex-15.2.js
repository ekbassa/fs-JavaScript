function findSmallest(a, b, c) {
 return  Math.min((Math.min(a,b)),c);
}

const res = findSmallest(1,3,14);
console.log(res);
