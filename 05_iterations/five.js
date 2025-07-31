// for each loops

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (items) {  // Normal Function
//     console.log(items);
// } )

// coding.forEach((items) =>{   // Arrow Function 
//     console.log(items);
    
// } )


// function codingName(name){
//     console.log(name);
// }
// coding.forEach(codingName)


// coding.forEach( (items, index, arr) => {
//     console.log(index, items," : ", arr,);
// })

const myObject = [
    {
        name : "Pankaj Rajput",
        email : "ps@gmail.com",
        pass : "ps@123"
    },
    {
        name : "Ankit Rajput",
        email : "an@gmail.com",
        pass : "ank@123"
    },
    {
        name : "abhi Rajput",
        email : "ab@gmail.com",
        pass : "abhi@123"
    },
    {
        name : "prakash Rajput",
        email : "prs@gmail.com",
        pass : "psr@123"
    },
    {
        name : "rohit Rajput",
        email : "rs@gmail.com",
        pass : "rsh@123"
    },
]

myObject.forEach( (items) => {
    console.log(items.name ,' : ', items.email);
    
})