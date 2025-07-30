// For loops

for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(i);
}
// ==================================================================================================

//  break
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log(`Your best Number is back ${i}`);
    break;
  }
  // console.log(i);
}
// ==================================================================================================

// continue
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log(`Your best Number is back ${i}`);
    continue;
  }
  //   console.log(i);
}
// ==================================================================================================

// Nested Loops
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    //   console.log(`Outer Loop value ${j} and inner loop ${i}`);
    // console.log(i ,'+', j ,' = ', i*j);
  }
  // console.log("-------------------------------");
}
// ==================================================================================================

//Array loops
let myArray = ["Rohit", "Virat", "Sky", "Pandey", "Dhoni"];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}
// ==================================================================================================

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
