const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const user = {
    uname : 'Pankaj singh rajput',
    email : 'panraj@gmail.com',
    isLoggin : true,

    work : function(){
        console.log("i am SoftWare Engineer");
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "uname"));

Object.defineProperty(user, "uname", {
    //writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(user, "uname"));


for (let [key , value] of Object.entries(user)) {
     if(typeof value !==  'function'){
        console.log(`${key} : ${value}`);
        
     }
}
