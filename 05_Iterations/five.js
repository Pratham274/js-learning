//forEach loop->
const coding=["js","ruby","java","python","cpp"]

//higher order function(callbackfn no name)
// coding.forEach( function (val) {
//     console.log(val);
// } )

//arrow function(no name)
// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    // console.log(item);
}

//give only reference(that is printMe) not execute it (that is printMe()) as prints automatically 
// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item) => {
    // console.log(item.languageName)
})
myCoding.forEach( (item) => {
    // console.log(item.languageFileName)
})