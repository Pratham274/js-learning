function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result=number1 + number2;
    // return result;
    return number1 + number2;
    console.log("Pratham"); //After return nothing is printed.
}

// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
const result=addTwoNumbers(3,5);
// console.log("Result: ", result);  //Undefined 

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username!");
//         return;
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username="Sam"){ //default value
    if(!username){
        console.log("Please enter a username!");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pratham"));
// console.log(loginUserMessage());

//*****************2 part**************************//
// ... -> rest operator and spread operator

// function calculateCartPrice(val1,val2, ...num1){

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,1000));

const user={
    objectname:"Maggie",
    price:15
}

function handleObject(anyobject){
    // console.log(`Objectname is ${anyobject.objectname} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    objectname:"Chhole Bhature",
    price : 100
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,100]));
