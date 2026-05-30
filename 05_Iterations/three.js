// for of 
["", "", ""]
[{}, {}, {}] //mostly used in forEach loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings= "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

//Maps hold key value pairs and remembers the insertion order of the keys (unique values);
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

//returns array
// for (const key of map) {
//     console.log(key);
// }

//destructure of array
for (const [key, value] of map) {
    // console.log(key,':-', value);
}

const myObj={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//gives error(use for in loop)
// for(const [key,value] of myObj){
//     console.log(key,':-', value);
// }


