//Immediately Invoked Function Expressions (IIFE)

// const addTwo=(num1,num2) => ({username:"Pratham"})
//just like this example by wraping in paranthesis () it is adding a block for objects
// we will do something like this so that the function can immediately be called and run

//NOTE-> For removing Global Scope pollution we use 'iife'

//1.() we are going to right definition of function 
//2.() this is for execution call

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //this ';' is required to end this function so it is required to explicitly write it 

((name) => {
    //unknow iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Pratham');





