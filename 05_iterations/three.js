//  For Of Loops

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const element of arr) {
//     console.log(element);
// }


// const greetings = "Hello Worlds"

// for (const element of greetings) {
//     if(element === " "){
//         continue
//     }else{
//         console.log(`one by one char is :- ${element}`);
//     }
// }

// ----------------------------------------------------------------------

// Map Lops

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);  
// }

// for (const [key, value] of map) {
//     console.log(key, ":-", value);  
// }


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {   // This is Not Working loops
    console.log(key, ':-', value);        // TypeError: myObject is not iterable  
}