const userEmail = "ps@ggmail.com"

// if(userEmail){
//     console.log("This is Correct Email....");
// }else{
//     console.log("This is not a Email.....");
// }

//-----------------------------------------------------

//  Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function () {}

// -----------------------------------------------------

const user = []

// if(user.lenght === 0){
//    console.log("Array is empty");
// }

const  emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
console.log("Values >>>>>>>", val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("more than 80");
;

