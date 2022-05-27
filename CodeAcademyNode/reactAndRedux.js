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



