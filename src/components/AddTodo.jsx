import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice' 



function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form onSubmit={addTodoHandler} 
        style={{ display: 'flex', marginBottom: '10px' }}>

            <input
            type='text'
            placeholder='Enter a todo...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            
            <button 
            style={{ padding: '5px', marginLeft: '5px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
            onClick={addTodoHandler}>Add Todo</button>

        </form>
    </div>
  )
}

export default AddTodo