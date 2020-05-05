import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

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
                            <button onClick={() => removeTodo(id)}>X</button>
                        </div>
                        <h3>{name}</h3>
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