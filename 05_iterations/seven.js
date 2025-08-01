// map and filter

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumers.map( (num) => num + 10 )
// const newNum = myNumers.map( (num) => { return num + 10 })
// console.log(newNum);

const newNumber = myNumers
                  .map( (num) => num * 10)
                    .map( (num)=> num / 2 )
                   .filter( (num) => num >= 20)
                   .map ( (num) => num + 3)

console.log(newNumber);
