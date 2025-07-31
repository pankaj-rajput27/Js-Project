const myObject = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    nd : "Node js",
    java : "Java is very Simple"
}

// for (const key in myObject) {
//      console.log(key);
// }

for (const key in myObject) {
    //  console.log(key , "is a ", myObject[key]);
    // console.log(`${key} is a ${myObject[key]}`);   
}

const languages = ["js", "rb", "py", "java", "cpp"]

for (const key in languages){
    // console.log(languages[key]);
    // console.log(`(${key}.) ${languages[key]} `);    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }