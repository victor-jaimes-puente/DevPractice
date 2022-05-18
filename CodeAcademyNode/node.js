// Starting NodeJS from the begining 

/*
Will need to review some basic JS concepts in order to fully work with node. 

arrow expressions
non-blocking i/o
setInterval + setTimeout
---

/ Defining an anonymous arrow expression that simply logs a string to the console.
console.log(() => console.log('Shhh, Im anonymous'));
 
// Defining a named function by creating an arrow expression and saving it to a const variable helloWorld. 
const helloWorld = (name) => {
  console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};
 
// Calling the helloWorld() function.
helloWorld('Codey'); //Output: Welcome Codey to Codecademy, this is an Arrow Function Expression.

--




*/
// **** 1
let noun1 = 'tyrant';
let adjective = 'clumsy';
let noun2 = 'king';
let verb = 'hack';
let noun3 = 'cats';


console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);


//Output = 
/* $ node app.js
The world's first tyrant was a very clumsy king who loved to hack while eating cats for every meal.

*/

// ***** 1 

// ***** 2 

const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);
// ***** 2 
// **** 3 
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];
console.log("testing initial memory = " + initialMemory);
console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)
/* output
$ node app.js Dapper
testing initial memory = 2788384
Your word is Dapper
Starting memory usage: 2788384. 
Current memory usage: 3046752. 
After using the loop to add elements to the array, the process is using 258696 more bytes of memory.
$ 
*/
// **** 3
// **** 4

// **** 4
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 
// **** 