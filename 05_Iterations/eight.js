//reduce (accumulator,current_value)
const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval) {
//     // console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },3) //initial value(to start) the operation
// console.log(myTotal);

const myTotal=myNums.reduce( (acc,currval) => (acc+currval), 0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"JS course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"Mobile dev course",
        price: 5999
    },
    {
        itemName:"Data Science course",
        price: 1999
    },
]

const priceToPay=shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);