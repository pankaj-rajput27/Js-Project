// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}pzn`
//     }
//     changeUsename(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const example =  new User("Pankaj", "panraj@gmail.com", "123a")
// console.log(example.encryptPassword());
// console.log(example.changeUsename());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}pcz`
}
User.prototype.changeUsename = function(){
    return `${this.username.toUpperCase()}`
}

const example2 = new User("Abhi", "abhi@gmail.com", "123")

console.log(example2.encryptPassword());
console.log(example2.changeUsename());

