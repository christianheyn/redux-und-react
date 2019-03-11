import React from 'react';

export const ToDoList = ({ todos = [], onDelete }) => (
    todos.map(x => <li>{x.title}<button onClick={() => onDelete(x.id)}>löschen</button></li>)
);