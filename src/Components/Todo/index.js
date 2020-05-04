import React from 'react';

import './style.css'
import NewFormTodo from '../NewFormTodo';


const Todo = ({ editMode, id, removeTodo, isDone, editTodo, handleUpdate, name }) => {
    return (
        <div className='todo-container'>
            {editMode ?
                <NewFormTodo name={name} id={id} handleSubmit={handleUpdate} /> : <div>
                    <h2>{name}</h2>
                    <button onClick={() => editTodo(id)}>edit</button>
                    <button onClick={() => removeTodo(id)}>remove</button>
                </div>
            }
        </div>
    )
}
export default Todo;