const worldPopulation = 7900;


const  percentageOfWorld1 = (population) => (population / worldPopulation) * 100

const china = percentageOfWorld1(1441);
console.log(china)

const india = percentageOfWorld1(1408);
console.log(india)

const germany = percentageOfWorld1(8.4)
console.log(germany)

//************************************************************************** */

const percentageOfWorld2 =  function (population){
    return (population / worldPopulation) * 100;
}

let france = percentageOfWorld2(750)
console.log(france)

let Russia = percentageOfWorld2(1440)
console.log(Russia)


let Poland = percentageOfWorld2(350)
console.log(Poland)

