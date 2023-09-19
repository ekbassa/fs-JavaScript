const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

let sameOrder = true;
let exist =null;

// test is same length 
if (food1.length !== food2.length){
    console.log(`False they have different length `); // Arrays have different lengths, so they can't be the same.
}

// test is same element - different order
 for (let item = 0; item < food1.length; item++){
      if (food1.every(item => food2.includes(item)) && food2.every(item => food1.includes(item))){
         exist = true;
      }
      else{
         exist = false;
      }
 }

 if (exist){
   console.log(`same items but different order ...`);
} 

 else{
   console.log(`Not same item are exist in both arrays...`)
}
 

// test if same order 
for (let i = 0; i < food1.length; i++) {
    if (food1[i] !== food2[i]){
        sameOrder = false;
    }
}
if (sameOrder){
    console.log(`OK --> they are same `)
}
else{console.log(`Not the same order `);}





  




