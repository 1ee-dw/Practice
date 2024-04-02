import { combineReducers } from 'redux';
import { bank } from './modules/bank';
import { todo } from './modules/todo';

export default combineReducers({
    bank,
    todo,
});
