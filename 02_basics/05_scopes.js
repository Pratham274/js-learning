// var c=300 // this will be given lower priority for var in global scope declration rather than local scope declaration.
let a=300
//Scopes->
if(true){
    let a=10
    const b=20
    // c=30 // this will provide output outside (global scope) the scope as well
    // console.log("Inner: ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);

//Note->while checking local scope or block scope in windows(browser) is different from the checking 
// of scope while checking from node(or resulting from node environment).


// Nested Scope->
function one(){
    const username="Pratham"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username="Pratham"
    if(username==="Pratham"){
        const website= " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//**************************************Interesting ***************************** */

// console.log(addone(5)); //can be done 
function addone(num){
    return num+1
}

// console.log(addTwo(5)); //cannot be done
const addTwo=function(num){
    return num+2
}



