import React from 'react';

export const CounterDisplay = ({ counter = 0, todos }) => (
    <h1>{todos.length}</h1>
);
