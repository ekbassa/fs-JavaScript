function getSumOfEven(arr) {

    return arr.reduce((sum,current)=>{
        return (current % 2 === 0)? sum + current : sum
    },0)
}
     
const res = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);




