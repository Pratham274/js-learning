//Object declaration can be done in two ways: 1.Literal 2.Constructor
//singeton(Constructor)

//Object.create() (Constructor)
//Object Literals

//Defining symbol:
const mySym=Symbol("key1");
//adding symbol in Object(using square bracket)
const JsUser={
    name: "Pratham",
    "Full_name": "Pratham Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Kanpur",
    email: "pratham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser[email]); // not possible to access as it is mandetory to give it as a string
// console.log(JsUser["email"]);
// console.log(JsUser.Full_name);//not possible 
// console.log(JsUser["Full_name"])

// console.log(JsUser.mySym);  //not a valid way to fetch symbol from objec
// console.log(JsUser[mySym]); //vaid way to fetch symbol from object 

//Changing values of Objects
JsUser.email="pg06042005@gmail.com" //overwrite
// console.log(JsUser.email);

//Locking the Object so that any further changes does not impact on original values of objects
// Object.freeze(JsUser);
JsUser.email="priyam@gmail.com"
// console.log(JsUser["email"]);

JsUser.greeting=function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    // console.log(`Hello JS user,${this.name}`); //String interpolition
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//***************Part 2************************** */
// const  tinderUser=new Object() //Constructor (Singleton object)
const tinderUser={} //Literal (Non Singleton Object)
// console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstName: "Pratham",
            lastName: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2} //not a good practise as it stores both objects as nested object
// console.log(obj3); 
// const obj3=Object.assign({},obj1,obj2,obj4); //this is the good practise for avoiding nested object and also use {} in parameter

const obj3={...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"y@gmail.com"
    },
    {
        id:3,
        email:"g@gmail.com"
    },
]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); //checks if the property exists in the object or not 
