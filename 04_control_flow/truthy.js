// const userEmail="p@Pratham.ai" //true value 
// const userEmail="";
const userEmail=[]
if(userEmail){
    // console.log("Got user email");
}
else{
    // console.log("Don't have userEmail");
}

//falsey values:
// false, 0, -0, BigInt (on), "", null, undefined, NaN, 

//truthy values:
// "0", 'false', " ", [], {}(object) , function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){ //Object.keys() convert keys of Object as array then .length calculate length of the converted object as array
    // console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null and undefined 

let val1;
val1=5 ?? 10
// let val2=null??10
// let var1=undefined ?? 15
// console.log(var1);

// console.log(val2);
// console.log(val1);

val1=null??10??20
console.log(val1);

// Terniary Operator:
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("Less than 80") :console.log("More than 80");