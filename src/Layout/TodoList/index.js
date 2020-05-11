import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Todo from '../../Components/Todo';
import TodayDate from '../../Components/Date';
import NewFormTodo from '../../Components/NewFormTodo';
import './style.css'

const TodoList = () => {
    const todos = useStoreState(state => state.todos);
    const [date, setDate ] = useState( new Date());

    const addTodo = useStoreActions(action => action.addTodo);
    const updateTodo = useStoreActions(action => action.updateTodo);
    const deleteTodo = useStoreActions(action => action.deleteTodo);

    // Attach event for realtime updating
    window.setInterval(function () {
        setDate(new Date())
    }, 1000);

    //Display Form
    const handleToggleEditForm = (data) => {
        const dataCopy = {...data};
        dataCopy.editMode = !dataCopy.editMode;

        updateTodo(dataCopy);
    }

    // Update a todo 
    const  handleUpdate = (data) => {
        updateTodo({...data, editMode: false});
    }

    // delete a todo
    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    }

    // add a todo
    const handleAddToDo = (data) => {
        addTodo(data);
    }

    //Mark to do as complete
    const handleToggleIsDone = (data) => {
        updateTodo({...data, isDone: !data.isDone })
    }

    // todo items list display
    const todosBox = todos.map( todo => 
        <Todo 
            data = {todo} 
            key = {todo.id} 
            todosList = {todos}
            deleteTodo = {handleDeleteTodo}
            toggleEditForm = {handleToggleEditForm}
            updateTodo = {handleUpdate}
            toogleIsDone = {handleToggleIsDone}
        />
    );

    return (
        <div className="todolist-root">
            <TodayDate date={date}/>
            <NewFormTodo handleSubmit={handleAddToDo}/>

            <div className="todolist-list">
                {todosBox}
            </div>
         
        </div>
    )
}

export default TodoList;