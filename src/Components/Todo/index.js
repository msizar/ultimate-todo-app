import React from 'react';

import './style.css'
import NewFormTodo from '../NewFormTodo';

const Todo = ({isDone, toggleEditForm, updateTodo, data, deleteTodo }) => {

    const updateHandler = (data) => {
        updateTodo(data)
    }

    return (
        <div className='todo-container'>
            <div className="todo-item">
                {data.editMode ?
                    <NewFormTodo key={data.id} name={data.name} id={data.id} handleSubmit={updateHandler} /> :
                    <div className="todo-item_inner">
                        <div className="todo-removeBtn">
                            <button onClick={() => deleteTodo(data.id)}>X</button>
                        </div>
                        <h3>{data.name}</h3>
                        <div className="todo-btns">
                            <button onClick={() => deleteTodo(data.id)}>done</button>
                            <button onClick={() => toggleEditForm (data)}>edit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Todo;