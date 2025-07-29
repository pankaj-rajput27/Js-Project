// const tinderUser = new Object() // This is Singleton Object
const tinderUser = {} // This is Non Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Smith"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "psr@yahoou.in",
    fullName: {
        userFullName : {
            firstName : "Pankaj",
            lastName : "Rajput"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "d", 5:"e"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users =[
    {
        id :1,
        email:"pankaj@gmail.com"
    },
    {
        id :7,
        email:"psingh@gmail.com"
    },
    {
        id :2,
        email:"psrajput@gmail.com"
    },
    {
        id :3,
        email:"psinghraj@gmail.com"
    },
    {
        id :4,
        email:"pankajsraj@gmail.com"
    },
]

users[1].email
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstrutor : "hitesh"
}
course.courseInstrutor

const {courseInstrutor : instructor} = course
// console.log(courseInstrutor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]