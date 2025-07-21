const accountId = 1233600;
let accountEmail = "pankaj@gmail.com";
var accountPassword = "1234@pankaj";
accountCity = "indore";
let accountState;
// accoutId =2 // not allowed

accountEmail = "pankajSingh@google.com";
accountPassword = "panka@990099";
accountCity = "Harda";
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funnctional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
