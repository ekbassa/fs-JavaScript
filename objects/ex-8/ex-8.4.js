const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]; 


function convertArrayToAnObject(anyArray){
    //convert the given array into a string and removing all the spaces 
    let arrString = (anyArray.join('').replace(/\s/g, "")).toLowerCase();

    //create an object 
    const letterOccurrences  = {}

    return arrString;
}

let res = convertArrayToAnObject(array);
console.log(res);