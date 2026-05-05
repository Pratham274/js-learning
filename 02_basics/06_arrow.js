// Arrow functions and this keyword
// this keyword->tells about current context

//function inside object and then calling it
const user={
    username: "Pratham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Priyam" //Context(value) is changed.
// user.welcomeMessage()

//we are in node environment not in browser environment
// In browser globalobject is Window
// console.log(this) //here the value is empty.


//While declaring this in function then it will show some values
// function chai(){
//     console.log(this);
// }
// chai() //gives the global context of node environment through function

//this can be (context ) can be accesible in objects not in functions 
// function chai(){
//     let username="Pratham"
//     console.log(this.username); //o/p will be undefined
// }
// chai() //

// const chai=function(){
//     let username="Pratham"
//     console.log(this.username);
// }

// chai();

// const chai2= () => {
//     let username="Prarham"
//     console.log(this);
// }
// chai2() //gives empty

// arrow function var=()=>{
//    __
//    }

// {} always right 'return'
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//Implicit return (same line)
//if () don't right return 
// const addTwo=(num1,num2)=> num1+num2; // gives output 
// const addTwo=(num1,num2)=> (num1+num2);

//let's check for objects as well 
//wrap in paranthesis
// const addTwo=(num1,num2) => ({username:"Pratham"})

// console.log(addTwo(3,4))
