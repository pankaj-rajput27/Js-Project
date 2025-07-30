// if Conditional Statements

const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("temperature less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`You can ${power}`);
// }
// console.log(`User power: ${power}`);

//===============================================================

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  // This is wrong practice 

// if(balance < 500){
//     console.log("amount is less than 500"); 
// } else if (balance < 750){
//     console.log("amount is less than 750"); 
// } else if (balance < 950){
//     console.log("amount is less than 950"); 
// }else{
//     console.log("amount is less than 1200"); 
// }

// +++++++===========+++++++++++=========================+++++++++++++++++++++++

const isUserLogIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true


// if(isUserLogIn && debitCard && 2==3){
//     console.log("Allow to buy Course");
// }else{
//     console.log("Your are Not purchase Course");
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Your Are Logged in This Site ");
}