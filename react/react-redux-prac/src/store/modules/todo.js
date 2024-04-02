const TodoList = [];

const INSERT = 'todo/INSERT';
const DELETE = 'todo/DELETE';
const RESET = 'todo/RESET';

export function insertTodo(value) {
    return {
        type: INSERT,
        payload: value,
    };
}
export function deleteTodo(idx) {
    return {
        type: DELETE,
        payload: idx,
    };
}
export function reset() {
    return {
        type: RESET,
    };
}

export function todo(state = TodoList, action) {
    switch (action.type) {
        case INSERT:
            return [{ todo: action.payload }, ...state];
        case DELETE:
            return state.filter((_, index) => index !== action.payload);
        case RESET:
            return [];
        default:
            return state;
    }
}
