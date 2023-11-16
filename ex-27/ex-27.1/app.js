function greaterThanTen(number){
    return new Promise((resolve,reject)=>{
        if (number > 10) {
            resolve(number);
        }
        else{
            reject(number)
        }
    })
}

let rndInt = Math.floor(Math.random() * 100);

greaterThanTen(rndInt)
    .then((result)=>{
        console.log(`Success: ${result} is greater than Ten.`)
    })
    .catch((error)=>{
        console.log(`Error: -->Number ${error} less or equal to TEN`)
    })