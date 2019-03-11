import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './redux-store/store';
import { ADD_TODO, INCREMENT_COUNTER, DELETE_TODO } from './redux-store/reducer';
import { ToDoList } from "./ToDoList";
import { CounterDisplay } from "./CounterDisplay";

const stateToProps = (state) => {
    return {
        todos: state.todos,
        counter: state.counter,
    };
};

const ConnectedToDoList = connect(stateToProps)(ToDoList);
const ConnectedCounterDisplay = connect(stateToProps)(CounterDisplay);

const App = () => {
    const handleKeydown = (event) => {
        if (event.keyCode === 13) {
            store.dispatch({
                type: ADD_TODO,
                payload: { title: event.target.value, id: event.target.value },
            })
            event.target.value = '';
        }
    };

    const handleDelete = (id) => {
        store.dispatch({ type: DELETE_TODO, payload: id })
    };

    return (
        <Provider store={store}>
            <ConnectedToDoList onDelete={handleDelete} />
            <ConnectedCounterDisplay />
            <input type="text" onKeyDown={handleKeydown} />
        </Provider>
    );
}

export default App;
