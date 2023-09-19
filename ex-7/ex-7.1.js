function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index);
}


let myArr = [3,4,4,3,6,3]

console.log (removeDuplicates(myArr));