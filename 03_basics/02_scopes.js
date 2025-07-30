
// console.log(c)
let ab 
var c = 10


if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(">>>> :", ab);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Pankaj"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "Pankaj"
    if(username === "Pankaj"){
        const website = " Singh Rajput"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++ Interesting +++++++++++++++++++++++

addone(7)
function addone(num){
    return num + 1
}

addTwo()
const addTwo = function(num){
    return num + 2
}