import React from 'react';

import './style.css'
import NewFormTodo from '../NewFormTodo';

const Todo = ({toggleEditForm, updateTodo, data, deleteTodo, toogleIsDone }) => {

    const updateHandler = (data) => {
        updateTodo(data)
    }

    return (
        <div className='todo-container'>
            <div className="todo-item">
                {data.editMode ?
                    <NewFormTodo key={data.id} name={data.name} id={data.id} handleSubmit={updateHandler} /> :
                    <div className="todo-item_inner">
                        <button onClick={() => toogleIsDone(data)}>
                           <span className="material-icons todo-icon__done">{data.isDone ? 'check_circle': 'radio_button_unchecked' }</span>
                        </button>

                        <h3 className={data.isDone ? 'todo-done__checked' : 'todo-done__unchecked'}>{data.name}</h3>
                        { !data.isDone && <div className="todo-btns">
                            <button onClick={() => toggleEditForm (data)}>
                            <span className="material-icons">edit</span>
                            </button>
                            <button onClick={() => deleteTodo(data.id)}>
                                <span className="material-icons">delete</span>
                            </button>
                        </div>}
                    </div>
                }
            </div>
        </div>
    )
}
export default Todo;