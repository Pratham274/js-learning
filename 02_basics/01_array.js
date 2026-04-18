//arrays->object, collection of multiple items whether of different types, resizable, mix of datatypes, not associative , 0-based indexing.
const myarray=[0,1,2,3,4,5,true,"Pratham"]
// console.log(myarray[0]);
//Shallow copy of an object is a copy whose properties share the same references that is anything that is changed will lead in the changes in the original array that is it does not provide deep copy.
//Deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)

const myheroes=["Shaktiman","Spiderman","Krrish"]
const myarr=new Array(1,2,3,4)

//Methods in arrays
// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// myarr.unshift(0) //0 is inserted in start.  Time consuming 
// myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));
// console.log(myarr.indexOf(3));

const newArr=myarr.join()//bind and convert it into string 
// console.log(myarr);
// console.log(newArr);
// console.log(typeof newArr);

//slice , splice
//slice
console.log("A ",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,3);//includes last range and array is changed that is the spliced portion separates from the original array 
console.log("C ",myarr);
console.log(myn2);