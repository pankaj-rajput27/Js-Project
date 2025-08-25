function setUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
       setUsername.call(this.username)

       this.email = email
       this.password = password
}

const exmaple = new createUser("pankaj", "pan@gmail.com", "pa123")
console.log(exmaple);
