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
