// Arrays

const myArr = [0,1,2,3,4,5]
const myHeors = ["Shaktiman", "naagraj", "Batman", "Spider-Man","Iron Man"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[1]);
// console.log(myHeors[1]);
// console.log(myArr2[1]);

// Arrays Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));


// Slice , Splice  

console.log("A>>>", myArr);

const myn1 = myArr.slice(1,5);
console.log(myn1);

console.log("B>>>", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);

console.log("C>>>", myArr);
