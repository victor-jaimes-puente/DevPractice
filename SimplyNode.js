"use strict"


/*
1.
Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.


Stuck? Get a hint
2.
In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.

If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().

Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.


Stuck? Get a hint
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Here are some helpful links to the top questions asked by coders about this exercise:

This exercise mentions documentation, but what is that… and how/why/when should I use it?
Is JavaScript case sensitive?
What is the difference between a property and a method, and when do I need to use parenthesis?
*/

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');
console.log(
    "Codecademy".toUpperCase()
);

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');
console.log('    Remove whitespace   '.trim())
/*
Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.


Stuck? Get a hint
2.
Now, use Math.floor() to make the output a whole number.

Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().


Stuck? Get a hint
3.
Find a method on the JavaScript Math object that console.log();s the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.


Stuck? Get a hint
4.
Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

Put the number 2017 in the parentheses of the method and use console.log() to print the result.
*/
 
console.log(Math.floor(Math.random() * 50) * 100);

console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017))

// Higher Order Functions  

console.log("----------------------");

// We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)!

// Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFour

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

// isTwoPlusTwo()
// isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

console.log("----------------------");

const higherOrderFunc = param => {
    param();
    console.log( `I just invoked ${param.name} as a callback function!`);
  }
   
  const anotherFunc = () => {
    console.log( 'I\'m being invoked by the higher-order function!');
  }
   
  higherOrderFunc(anotherFunc);

//   Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!

// To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:

// checkA stores the sum val plus 2.
// checkB stores the invocation of the func callback, with val as the argument.

const addTwo = num => {
    return num + 2;
  }
  
    const checkConsistentOutput = (func, val) => {
          let checkA = val + 2; 
          let checkB = func(val);
          if (checkA === checkB){
            return checkB
          } return "inconsistent results"
    }
  
  console.log(checkConsistentOutput(addTwo, 9));
  
  // ITERATORS

// For Each
  const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

// You may use any form of callback you prefer.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => {
    console.log("I want to eat a " + fruit);
})

// Map Method 

