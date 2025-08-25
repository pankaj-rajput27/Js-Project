class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A New course was added by ${this.username}`);
    }
}

const teach = new Teacher("Pawan", "pawan@gamil.com", "123")
teach.logMe()
teach.addCourse()
const myUser = new User("Pankaj")

myUser.logMe()
// console.log(chai instanceof User);
