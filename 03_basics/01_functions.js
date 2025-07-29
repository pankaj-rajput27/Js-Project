
function myName(){
    console.log("P");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("j");
}

// myName();

function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
   
}

// addTwoNumbers(7,3) // This Right use
// addTwoNumbers(7,"a") // This wrong use because it is number type data

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result>>", result);


function loginUserMessage(username = "sam"){
    
    //  if(username === undefined){
    //     console.log("Plzz enter your name ?");
    //     return
    //  }
     if(!username){
        console.log("Plzz enter your name ?");
        return
     }

      return `${username} User Are logged in`
}
// console.log(loginUserMessage("Pankaj singh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return val1
}

// console.log(calculateCartPrice(100,200,300,4000,7000));

const user = {
    username :"Pankaj",
    price : 1009
}


function handlObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handlObject(user)

handlObject({
    username :"Pankaj Singh",
    price :3000

})

const myNewArray = [200,300,400,900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,900]));

