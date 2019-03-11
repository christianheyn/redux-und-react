export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const removeFromArray = (arr, id) => {
    return arr.filter(x => x.id !== id)
}


export const todoReducer = (state = [], { type, payload }) => {
    switch (type) {
    case ADD_TODO:
        return [...state, payload];
    case DELETE_TODO:
        return removeFromArray(state, payload);
    default:
        return state;
    }
};
// ====
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const counterReducer = (state = 0, { type }) => {
    switch (type) {
        case INCREMENT_COUNTER:
            return state + 1;
        default:
            return state;
    }
};
