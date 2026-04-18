const name="Pratham Gupta"
const repoCount=50
// console.log(name+repoCount+"value");
//String interpolition 
// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gameName='Pratham-Gupta-is-learning-JavaScript-everyday'

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //original string is not changed. 
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);//cannot give negative values
// console.log(newString);

const anotherstring=gameName.slice(4,-6); //can also add negative values
// console.log(anotherstring);

const name1="     Pratham    "
// console.log(name1);
// console.log(name1.trim());

const url="https://Pratham.com/Pratham%20Gupta"
// console.log(url.replace('%20','-'));
// console.log(url.includes('gupta'));

//String to array:
const words=gameName.split(" ");
// console.log(words[4]);

const chars=gameName.split("");
// console.log(chars[5]);

console.log(gameName.split('-'));//Gives array and separate on the basis of given parameter 
