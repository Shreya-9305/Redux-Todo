//STEP 2:- named the file like this because it is a naming convention telling that we used redux.
//Importing two functions:- one for creating the slice and one for generating nanoids.

import { createSlice, nanoid } from '@reduxjs/toolkit';

//step 3 :- first we'll define the initial state of our slice
const initialState = {  

    // todos: [{id: 1, text: 'Learn React', completed: true}, {id: 2, text: 'Learn Redux', completed: false}, {id: 3, text: 'Build something fun!', completed: false}]

    todos: [{id: 1, text: 'Learn React', completed: true}]


}

//step 4 :- create a slice. A slice is a collection of reducers, actions, and selectors.
//remember that the name of the property in redux are already defined in the slice.

export const todoSlice = createSlice({

    name: 'todo',
    initialState, //we couldve initialized the state here but we did it above.
    reducers: {
        addTodo: (state,action)=>{
            // state.todos.push({id: nanoid(), text: action.payload, completed: false});
            const newTodo = {
                id: nanoid(),
                text: action.payload,
               //payload is predefined in redux toolkit, it basically means the data that we want to pass to the reducer.
            }
            state.todos.push(newTodo);
            //we can mutate the state directly because we are using immer under the hood.
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);


        },

    }
    //IMPORTANMT:- 
    // 0)the reducers are the functions that will be called when we dispatch an action.
    //1)difference between redux and context API here is that we have to define the funcyions here only.
    //2) Remember that we will get the arguments in the function as state and action, PREDEFINED.
});

//step 5 :- export the actions.

export const {addTodo, removeTodo} = todoSlice.actions;

//step 6 :- export the reducer so that we can use it in the store.

export default todoSlice.reducer;