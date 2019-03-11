import { createStore, combineReducers } from "redux";
import { todoReducer } from './reducer';
import { counterReducer } from './reducer';

const allReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer,
})

export const store = createStore(allReducer);