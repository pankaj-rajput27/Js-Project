const mi = ["Rohit", "Sky", "Pandya", "Tilak", "Bumrah"]
const csk =["Dhoni", "Gopal", "Jadeja", "Dube", "Hooda", "Ashwin"]

// mi.push(csk)

// console.log(mi);
// console.log(mi[4][2]);

const teamIndia = mi.concat(csk)
// console.log(teamIndia);

const all_indian = [...mi, ...csk] 
// console.log(all_indian);


const another_array = [1,2,3,[4,5,6],7,[6,7,[3,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Pankaj"));
console.log(Array.from("Rajput"));
console.log(Array.from({name: "Pankaj"})); // Read More this methodes

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




