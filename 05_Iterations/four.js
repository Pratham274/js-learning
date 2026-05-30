//for in loop
const myObj={
    js:'JavaScript',
    cpp:'C++',
    rb:"Ruby",
    swift:"Swift by apple"
}

// for (const key in myObj) {
//     console.log(myObj[key]);
// }

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming=["js","rb","py","java","cpp"]

//gives keys of array(indices) not values
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
map.set('IN',"India")

//map is not iterable
// for (const [key] in map) {
//     console.log(key);
// }


