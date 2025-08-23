//---------------Object literal--------------------------

const user = {
    username : "Pankaj",
    loginCount : 8,
    singnIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);    
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//-----------Constructor function-----------------------

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Pankaj", 12, true)
const userTwo = new User("Ankit", 11, false)
console.log(userOne.constructor);
console.log(userTwo);



