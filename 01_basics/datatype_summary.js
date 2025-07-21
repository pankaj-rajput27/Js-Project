// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456789123456n


// Reference (Non Primitive)

// Array , Object , Function

const hero = ["shaktiman", "naagraj", "doga"];
let myObject = {
    name : "pankaj",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Stack (Primitive), Heap (Non-Primitive)

let myName = "PankajSinghRajput"

let anotherName = myName;
anotherName = "Rohit"

console.log(myName)
console.log(anotherName)

let UserOne = {
    email :"pankajsr@gmail.com",
    pass : "praj@123"
}


let UserTwo = UserOne;

UserTwo.email = "rajpupsingh@google.com"

console.log(UserOne.email)
console.log(UserTwo.email)