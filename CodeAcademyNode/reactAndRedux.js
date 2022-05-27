// Working on react props just as a quick refresher 

/* 
Let’s walk through an example!

On line 11, you can see a piece of information being passed to <Greeting />. The information’s name is firstName.

How could you make firstName show up on the screen?

By including this.props.firstName somewhere in the Greeting class’s render method’s return statement!

On line 6, in between the returned <h1></h1> tags, add the following expression:

Hi there, {this.props.firstName}!
Checkpoint 2 Passed

Stuck? Get a hint
2.
In the ReactDOM.render() call, change firstName‘s value to a different string.

Click Run. Once the browser refreshes, a new name should appear on the screen.
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Dapper Tyrant' />, 
  document.getElementById('app')
);

//

/*
Your mission is to pass a prop to a <Greeting /> component instance, from an <App /> component instance.

If <App /> is going to pass a prop to <Greeting />, then it follows that <App /> is going to render <Greeting />.

Since <Greeting /> is going to be rendered by another component, that means that <Greeting /> needs to use an export statement.

In Greeting.js, delete this statement from line 2:

import ReactDOM from 'react-dom';
At the bottom of Greeting.js, remove the entire call to ReactDOM.render().

On line 3, add the word export to the beginning of the line, before the word class:

export class Greeting extends...
Checkpoint 2 Passed

Stuck? Get a hint
2.
<App /> can’t pass a prop to <Greeting /> until App.js imports the variable Greeting! Until then, the characters <Greeting /> in App.js might as well be nonsense.

Select App.js. Create a new line underneath the line import ReactDOM from 'react-dom';.

On your new line, import the Greeting component class from ./Greeting. Remember to wrap Greeting in curly braces!

Checkpoint 3 Passed

Stuck? Get a hint
3.
In App.js, add a <Greeting /> instance to App‘s render method, immediately underneath the <h1></h1>.

Give <Greeting /> an attribute with a name of “name.” The attribute’s value can be whatever you’d like.

When you click Run, <App /> will render <Greeting />, and pass it a prop!
*/

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name='Zulu' />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Greeting.js 
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

/*
Your goal is to pass talk from <Talker /> to <Button />.

What prop name should you choose?

It doesn’t really matter! prop attributes will work with just about any name, so long as the name follows the JavaScript variable name rules.

Since you’re going to pass a function named talk, you might as well use talk as your name. Inside of the render method, change your attribute name from foo to talk.

Checkpoint 3 Passed

Stuck? Get a hint
3.
What should your prop value be?

Your prop value should be the information that you want to pass! In this case, you want to pass the method named talk.

Inside of the render method, change your attribute’s value to talk.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

/* 
this.props.children
Every component’s props object has a property named children.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js. In Example 1, <BigButton>‘s this.props.children would equal the text, “I am a child of BigButton.”

In Example 2, <BigButton>‘s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>‘s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

Instructions
1.
Select App.js.

Notice that App renders two <List></List> instances, and that each <List></List> has at least one <li></li> child.

Now open List.js, and take a look at the List component class.

Think about the fact that each List instance is going to be rendered with two JSX tags:

<List>  // opening tag
</List> // closing tag
…and that there will be at least one <li></li> child in between those tags:

<List>  // opening tag
  <li></li> // child
</List> // closing tag
Click Run.

Checkpoint 2 Passed

Stuck? Get a hint
2.
You can see two list titles in the browser, but no list items! How can you make the list-items appear?

In List.js, in the render function, in between <ul></ul> tags, add {this.props.children}.

Checkpoint 3 Passed

Stuck? Get a hint
3.
BONUS: Each <List></List> instance is passed a singular title: “Living Musician” and “Living Cat Musician,” respectively. Somehow, each <List></List> counts its list-items and automatically adds an “s” to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.

See if you can figure out how the instances of the List component class are automatically pluralizing their titles! 

*/

//App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Nova the Cello Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
); 

//List.js

import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
} 
/* 

Take a look at the Button component class.

Notice that on line 8, Button expects to receive a prop named text. The received text will be displayed inside of a <button></button> element.

What if nobody passes any text to Button?

If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.

You can make this happen by giving your component class a property named defaultProps:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps;
The defaultProps property should be equal to an object:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
// Set defaultProps equal to an object:
Example.defaultProps = {};
Inside of this object, write properties for any default props that you’d like to set:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps = { text: 'yo' }; 
If an <Example /> doesn’t get passed any text, then it will display “yo.”

If an <Example /> does get passed some text, then it will display that passed-in text.

Instructions
1.
Click Run.

What a sad, textless button! :(

Checkpoint 2 Passed

Stuck? Get a hint
2.
On line 15, give the Button component class a defaultProps property. Make this property equal to an object.

Give the defaultProps object one property, so that text‘s default value is equal to 'I am a button'.

The button’s appearance should change. Much better!

Checkpoint 3 Passed

Stuck? Get a hint
3.
In the ReactDOM.render() call, give <Button /> the following attribute:

text=""
Your new prop should override the default, making the <button></button> sad again :(

*/

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'}

ReactDOM.render(
  <Button text='' />, 
  document.getElementById('app')
);

/* 

this.props Recap
That completes our lesson on props. Great job sticking with it!

Here are some of the skills that you have learned:

Passing a prop by giving an attribute to a component instance
Accessing a passed-in prop via this.props.prop-name
Displaying a prop
Using a prop to make decisions about what to display
Defining an event handler in a component class
Passing an event handler as a prop
Receiving a prop event handler and attaching it to an event listener
Naming event handlers and event handler attributes according to convention
this.props.children
getDefaultProps
That’s a lot! Don’t worry if it’s all a bit of a blur. Soon you’ll get plenty of practice!

*/ 

