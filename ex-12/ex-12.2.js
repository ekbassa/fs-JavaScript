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