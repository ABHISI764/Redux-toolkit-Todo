import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'



function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const updateTodoHandler = (id, newText) => {
        dispatch(updateTodo({ id, newText }));
    };
    return (
        <>
            <div style={{ marginBottom: '10px' }}>Todos</div>
            {
                todos.map((todo) => (
                    <li
                        style={{ marginBottom: '5px', backgroundColor: '#f4f4f4',
                         padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between' }}
                        key={todo.id}>
                        {todo.text}
                        <button
                            style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px',
                             padding: '5px', cursor: 'pointer', marginRight: '5px' }}
                             
                            onClick={() => updateTodoHandler(todo.id, prompt('Enter new text:', todo.text))}
                        > Update </button>
                        <button
                            style={{ backgroundColor: 'red', color: 'white', border: 'none',
                             borderRadius: '3px', padding: '5px', cursor: 'pointer' }}
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >X</button>
                    </li>
                ))
            }
        </>

    )
}

export default Todos