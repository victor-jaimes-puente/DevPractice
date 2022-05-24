/ Define reducer here

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'songs/addSong': {
      return [...state, action.payload]
    } 
    case 'todos/removeAll' : {
      return [];
    } 
    case 'songs/addSong': {
      return [...state, action.payload];
    } 
    case 'songs/removeSong': {
      return (state.filter(song => song !== action.payload ))
    }
    default: {
      return state;
    }
    }
  }

const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
}
// **** 4
// **** 5
// Reducer violates rule 1: 
// They should only calculate the new state value based on the state and action arguments.
 
const globalSong = 'We are the World';

const playlistReducer = (state = [], action) => {
 switch (action.type) {
   case 'songs/addGlobalSong': {
     return [...state, action.payload];
   }
   default:
     return state;
 }
}
 
// Example call to reducer
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];
const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
const newState = playlistReducer(state, addAction);



// Currently working on SEC+ will finish section then come back to this. 

//  Stopped at Lesson 11: Implementing Secure Network Protocols
// 
// **** 5
// **** 6
import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Dispatch your actions here.
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
store.dispatch({type: 'decrement'})
store.dispatch({type: 'decrement'})
console.log(store.getState())

// Final was -1
