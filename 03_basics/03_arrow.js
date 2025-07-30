const user = {
    username : "Pankaj Singh",
    age : 22,

    welcome : function(){
        console.log(`Hello ${this.username} Welcome to The Codeing Wrold. `);
        console.log(this);
    }
}

// user.welcome();
// user.username = "Pankaj Rajput"
// user.welcome();

// console.log(this);



// =+=+=+=+=+=+=+=+=+=+=+|| FUNTIONS ||=+=+=+=+=+=+=+=+=+=+


//✅ 1. Normal Function / Function Declaration

// function chai(){
//     let name = "Pankaj"
//     console.log(this.name);
// }


//✅ 2. Function Expression

// const chai = function(){
//     let name = "Pankaj"
//     console.log(this.name);
// }


// ✅ 3. Arrow Function

// const chai = () => {
//     let name = "Pankaj"
//     console.log(this.name);
// }

// chai()

// --------------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2     // This is Implicit return type function

// const addTwo = (num1, num2) => (num1 + num2)   // This is Implicit return type function

const addTwo = (num1, num2) => ({username : "Good boy"})


console.log(addTwo(2,7));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()