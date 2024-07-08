//Step 1 :- created a store

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';



//NOTE:- reducer is called slice in redux toolkit

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});


//accepts an object with a reducer property.


//NOTE:- we can pass multiple reducers in the object above, but we have only one reducer here.

