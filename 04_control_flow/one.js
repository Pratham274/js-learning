// if ->keyword
// const isUserLoggedIn=true;
// const temperature=35;

// if(2=="2"){
//     console.log("executed");
// }

// if(2==="2"){
//     console.log("executed");
// }

// if(temperature===45){
//     console.log("less than 40");
// }
// else{
//     console.log("temperature is greater than 40");
// }

// console.log("executed")


//comparision operators
// <, >, <=, >=, ==, !=, ===(strict equal)

// const score=200

// if(score>100){
    // let power="fly"
    // console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); //not in internal scope 
// var scope is completely global 


// Short hand notation 
//Implicit scope
const balance=1000
// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance <900){
//     console.log("less than 950");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggeInFromEmail=true;

//Logical Operators
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
}

if(loggeInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
