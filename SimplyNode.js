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

// The .map() Method
// The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

// const numeros = [1, 2, 3, 4, 5]; 
 
// const bigNumbers2 = numeros.map(number => {
//   return number * 10;
// });

// console.log(bigNumbers2);
// .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

// Add your code under the animals array and before the line console.log(secretMessage.join(''));

// Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
// const secretMessage = animals.map(animal => animal[0])

// console.log(secretMessage.join(''));

// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

//  const smallNumbers = bigNumbers.map(number => 
//    number / 100
//   )

//   console.log(smallNumbers);


//   The .filter() Method
// Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
// const shortWords = words.filter(word => {
//   return word.length < 6;
// });

// console.log(shortWords);
// console.log(words);

// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250
})

console.log(smallNumbers);


// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favWord => {
  return favWord.length > 7 
})

console.log(longFavoriteWords);

// The .findIndex() Method
// We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

// const jumbledNums = [123, 25, 78, 5, 9]; 
 
// const lessThanTen = jumbledNums.findIndex(num => {
//   return num < 10;
// });
// jumbledNums is an array that contains elements that are numbers.
// const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
// The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
// num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal => {
  return animal == "elephant"
})

console.log(foundAnimal);

// The .reduce() Method
// Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
 
// console.log(summedNums) // Output: 17
// Here are the values of accumulator and currentValue as we iterate through the numbers array:

// Iteration	accumulator	currentValue	return value
// First	1	2	3
// Second	3	4	7
// Third	7	10	17

// Now let’s go over the use of .reduce() from the example above:

// numbers is an array that contains numbers.
// summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
// numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
// The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.
// The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 100)  // <- Second argument for .reduce()
 
// console.log(summedNums); // Output: 117
// Here’s an updated chart that accounts for the second argument of 100:

// Iteration #	accumulator	currentValue	return value
// First	100	1	101
// Second	101	2	103
// Third	103	4	107
// Fourth	107	10	117

// Instructions
// 1.
// Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

// In main.js, there is an array of numbers, newNumbers.

// To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.
const newNumbers = [1400,1400,1400,1400];
const initialValue = 788
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return (accumulator + currentValue);
}, initialValue);
console.log(newSum);
// You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!


// Stuck? Get a hint
// 2.
// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.


// Stuck? Get a hint
// 3.
// To check the value being used as we iterate through the array, add three statements to the function body of the callback:

// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// a return statement that adds accumulator to currentValue.

// Stuck? Get a hint
// 4.
// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

// 5.
// While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

// Add a second argument of 10 to .reduce().

