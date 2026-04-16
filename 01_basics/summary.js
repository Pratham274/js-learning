//Datatypes
// 1.Primitive 
//7 types: Strings(call by value),Number,Boolean,Null,Undefined,Symbol,BigInt
//2.Reference type(Non-Primitive)
// Arrays, Objects, Functions

//We never define language or datatype in JS,dynamically typed

// const score=100
// const scoreValue=10.3 // also a number
// const isLogged=false
// const outsidetemp=null
// let userEmail; //undefined

// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);

//const bigNumber=465456468465n

const heros=["Shaktiman","Krrish","Flying Jatt","Naagraj"];
let myObj={
    name:"Pratham",
    age:21,
}

const myFunction=function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsidetemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);

// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory
// Stack(Primitive) the variable declared, we get copy of that, Heap(Non-Primitive) the variable declared, we got reference

//Stack:
let myName="Pratham Gupta"
let anothername=myName
anothername="Yashi Gupta"

console.log(myName);
console.log(anothername);

//Heap:
let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone
usertwo.email="Pratham@google.com"
console.log(userone.email);
console.log(usertwo.email);