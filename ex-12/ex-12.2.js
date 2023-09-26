const candyStore ={
    candies: [
        {
            
                name: 'mint-gum',
                id:  'as12f',
                price: 2,
                amount: 2
        },
        {
            name: 'twix',
            id:  '5hd7y',
            price: 5,
            amount: 4
        }
    ],
    cashRefister:20
}

// 1.
function getCandy(candyStore,id){
    const res = candyStore.candies.find((candy)=>{
        if (candy.id === id )
        return candy;
    })   
    return res; 
}

const res = getCandy(candyStore,'as12f');
console.log(res);

// 2.
function getPrice(candyStore,id){
    const res = candyStore.candies.find((candy)=>{
        return candy.id === id ;
    })
    return res.price;
}
const thePrice = getPrice(candyStore,'5hd7y');
console.log(thePrice)

// 3.
function addCandy(candyStore, id, name, price){
   
    const newCandy = {
        name: name,
        id: id,
        price: price,
        amount: amount
    };
    candyStore.candies.push(newCandy);
    return candyStore;
}

const addingNewCandy = addCandy(candyStore,'23po22','Bublle-Gum',6.78,amount=1);
console.log(addingNewCandy)

//4.

function buyCandy (candyStore,id){
    const buy = candyStore.candies.find((candy)=>{
        return candy.id === id ;
    })
    buy.amount = buyCandy.amount -1;
    return candyStore.cashRefister = candyStore.cashRefister + buy.price
}

const totalCashier = buyCandy(candyStore,'5hd7y');
console.log(totalCashier)


