// singleton
// Object.create


// object literals


const mySym = Symbol("key1")


const jsUser = {
    name : "Pankaj Rajput",
    "full Name": "Pankaj Singh Rajput",
    [mySym] :"This is my Symbol",
    age:22,
    loction :"Harda (M.P.)",
    email: "pankaj@googl.com",
    pass : "123Psr",
    isLoggedIn : false, 
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "psrajput@fir.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "psrajput@yahuoo.com"
// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function()
{
    console.log(`Hello World in my name ${this["full Name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
