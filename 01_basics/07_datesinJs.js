// Dates 

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);



// let myCreateDate = new Date(2025, 7, 23)
// let myCreateDate = new Date (2025, 7, 23, 5,3 )
let myCreateDate = new Date ("2025-07-23")
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleDateString());



let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleDateString('default',{
    weekday : "long"
})
