import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, insertTodo, reset } from '../store/modules/todo';

function TodoList() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch((state) => state.todo);
    const todolist = useSelector((state) => state.todo);
    const insert = () => {
        dispatch(insertTodo(value));
        setValue('');
    };

    return (
        <>
            <h1>할 일 적기</h1>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <input type="button" value="등록" onClick={insert} />
            <input type="button" value="초기화" onClick={() => dispatch(reset())} />
            <ul>
                {todolist.map((todo, idx) => (
                    <li key={idx}>
                        <span>{todo.todo} </span>
                        <input type="button" value="삭제" onClick={() => dispatch(deleteTodo(idx))} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
