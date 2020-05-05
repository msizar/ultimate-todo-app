import React from 'react';

import './style.css'
import NewFormTodo from '../NewFormTodo';


const Todo = ({ editMode, id, removeTodo, isDone, editTodo, handleUpdate, name }) => {
    return (
        <div className='todo-container'>
            <div className="todo-item">
                {editMode ?
                    <NewFormTodo name={name} id={id} handleSubmit={handleUpdate} /> :
                    <div className="todo-item_inner">
                        <div className="todo-removeBtn">
                            <button onClick={() => removeTodo(id)}>x</button>
                        </div>
                        <h2>{name}</h2>
                        <div className="todo-btns">
                            <button onClick={() => removeTodo(id)}>done</button>
                            <button onClick={() => editTodo(id)}>edit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Todo;